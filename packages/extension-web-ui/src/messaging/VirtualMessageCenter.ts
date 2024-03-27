// Copyright 2019-2022 @subwallet/extension-web-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { RequestSignatures, TransportRequestMessage, TransportResponseMessage } from '@subwallet/extension-base/background/types';
import { createPromiseHandler } from '@subwallet/extension-base/utils';
import EventEmitter from 'eventemitter3';

export interface VirtualEvent {
  id: string;
  data: any;
  message: string;
  origin?: string;
}

export interface VMCUIEventMap {
  'message': VirtualEvent;
}

export interface VMCBGEventMap {
  'message': VirtualEvent;
}

export class WorkerMessageCenter {
  private waitWorkerHandler = createPromiseHandler<MessagePort>();
  private workerPromise = this.waitWorkerHandler.promise;
  private workerPort?: MessagePort;

  setPort (workerPort: MessagePort) {
    workerPort.start();
    this.workerPort = workerPort;
    this.waitWorkerHandler.resolve(workerPort);
  }

  getWorker () {
    return this.workerPromise;
  }

  addEventListener (event: 'message', cb: (ev: MessageEvent) => void) {
    if (this.workerPort) {
      this.workerPort.addEventListener('message', (event) => {
        cb(event);
      });
    } else {
      this.workerPromise.then((worker) => {
        worker.addEventListener('message', (event) => {
          cb(event);
        });
      }).catch(console.error);
    }
  }

  postMessage (data: any) {
    const _data = data as TransportRequestMessage<keyof RequestSignatures>;

    if (this.workerPort) {
      this.workerPort.postMessage(_data);
    } else {
      this.workerPromise.then((worker) => {
        worker.postMessage(_data);
      }).catch(console.error);
    }
  }
}

export class BGMessageCenter {
  emitter: EventEmitter<VMCBGEventMap> = new EventEmitter();
  ui?: UIMessageCenter;
  setUI (ui: UIMessageCenter) {
    this.ui = ui;
  }

  addEventListener (event: 'message', cb: (ev: VirtualEvent) => void) {
    this.emitter.on(event, cb);
  }

  postMessage (data: TransportResponseMessage<keyof RequestSignatures>) {
    let _data = data;

    if (typeof data === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      _data = JSON.parse(JSON.stringify(data));
    }

    this.ui?.emitter.emit('message', {
      id: _data.id,
      data: _data
    });
  }
}

export class UIMessageCenter {
  bg?: BGMessageCenter;
  emitter: EventEmitter<VMCUIEventMap> = new EventEmitter();
  setBg (bg: BGMessageCenter) {
    this.bg = bg;
  }

  addEventListener (event: 'message', cb: (ev: VirtualEvent) => void) {
    this.emitter.on(event, cb);
  }

  postMessage (data: any) {
    let _data = data as TransportRequestMessage<keyof RequestSignatures>;

    if (typeof data === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      _data = JSON.parse(JSON.stringify(data));
    }

    this.bg?.emitter.emit('message', {
      id: _data.id,
      origin: 'extension',
      data: _data,
      message: _data.message
    });
  }
}

export class VirtualMessageCenter {
  ui: UIMessageCenter = new UIMessageCenter();
  bg: BGMessageCenter = new BGMessageCenter();

  constructor () {
    this.ui.setBg(this.bg);
    this.bg.setUI(this.ui);
  }

  static getInstance (): VirtualMessageCenter {
    // @ts-ignore
    if (!window.virtualMessageCenter) {
      // @ts-ignore
      window.virtualMessageCenter = new VirtualMessageCenter();
    }

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return window.virtualMessageCenter;
  }
}
