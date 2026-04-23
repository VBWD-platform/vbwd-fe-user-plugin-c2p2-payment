# 2C2P Payment Plugin (fe-user)

Vue 3 plugin that wires the 2C2P ASEAN checkout flow into the
user-facing storefront. Handles redirect to 2C2P's hosted payment
page, success landing, and cancel landing.

## Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/pay/c2p2` | `C2P2PaymentView.vue` | Redirects to the 2C2P session token URL |
| `/pay/c2p2/success` | `C2P2SuccessView.vue` | Post-payment landing |
| `/pay/c2p2/cancel` | `C2P2CancelView.vue` | User-cancelled landing |

## i18n

Shipped locales: `en`, `th`, `vi`, `id`. All keys under
`c2p2.payment.*`, `c2p2.success.*`, `c2p2.cancel.*`.

## Backend

Pairs with [`vbwd-plugin-c2p2`](https://github.com/VBWD-platform/vbwd-plugin-c2p2)
— the frontend calls `/api/v1/plugins/c2p2/payment-tokens` to obtain
the 2C2P `webPaymentUrl` and redirects the browser there.

## Testing

```bash
cd vbwd-fe-user
npm run test
```

---

## Related

| | Repository |
|-|------------|
| 🗄 Backend | [vbwd-plugin-c2p2](https://github.com/VBWD-platform/vbwd-plugin-c2p2) |
| 🛠 Admin | [vbwd-fe-admin-plugin-c2p2](https://github.com/VBWD-platform/vbwd-fe-admin-plugin-c2p2) |

**Core:** [vbwd-fe-user](https://github.com/VBWD-platform/vbwd-fe-user)
