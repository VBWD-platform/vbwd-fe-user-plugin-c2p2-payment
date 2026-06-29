import type { IPlugin, IPlatformSDK } from 'vbwd-view-component';
import en from './locales/en.json';
import th from './locales/th.json';
import vi from './locales/vi.json';
import id from './locales/id.json';

export const c2p2PaymentPlugin: IPlugin = {
  name: 'c2p2-payment',
  version: '26.6.1',
  description: '2C2P ASEAN payment processing — cards, QR, regional wallets',
  _active: false,

  install(sdk: IPlatformSDK) {
    sdk.addRoute({
      path: '/pay/c2p2',
      name: 'c2p2-payment',
      component: () => import('./C2P2PaymentView.vue'),
      meta: { requiresAuth: true, noLayout: true },
    });
    sdk.addRoute({
      path: '/pay/c2p2/success',
      name: 'c2p2-success',
      component: () => import('./C2P2SuccessView.vue'),
      meta: { requiresAuth: true, noLayout: true },
    });
    sdk.addRoute({
      path: '/pay/c2p2/cancel',
      name: 'c2p2-cancel',
      component: () => import('./C2P2CancelView.vue'),
      meta: { requiresAuth: true, noLayout: true },
    });

    sdk.addTranslations('en', en);
    sdk.addTranslations('th', th);
    sdk.addTranslations('vi', vi);
    sdk.addTranslations('id', id);
  },

  activate() {
    this._active = true;
  },
  deactivate() {
    this._active = false;
  },
};
