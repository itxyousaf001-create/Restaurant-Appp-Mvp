# Restaurant App MVP — Fall 2026

Frontend-only React Native / Expo MVP for Assignment 1.

## Mock credentials
- Customer: `customer@restaurant.com` / `Customer123`
- Manager: `manager@restaurant.com` / `Manager123`

## Installation
1. Install Node.js 20 LTS or a compatible current LTS release.
2. Run `npm install`.
3. Run `npx expo start`.
4. Scan the QR code with Expo Go, or open an Android/iOS emulator.

## Repository structure
- `A1/SRS.pdf` — Software Requirements Specification.
- `A1/UML/` — Use Case, Class, Sequence, State Machine and Component diagrams.
- `src/components` — reusable UI components.
- `src/screens` — application screens.
- `src/context` — Auth, Theme, Cart and Orders contexts.
- `src/reducers` — cart/order reducers.
- `src/hooks` — useForm, useDebounce and useReservation.
- `src/data` — local mock data.
- `src/navigation` — nested stack/tab navigation.

## Context note
Context is suitable for authentication, theme, cart and order state because these values are needed by multiple screens. It avoids passing the same values through many component layers (prop drilling). Providers keep related global state in one place. The custom consumer hooks also centralise provider validation. A drawback is that consumers can re-render when the context value changes, so context should not be used for every local state value.

## Hook usage
| Hook | Main screen/file |
|---|---|
| useState | Login, Menu, Reservation |
| useEffect | Menu, Orders, Tracking |
| useRef | Menu search/list/debounce counter |
| useContext | Auth, Theme, Cart, Orders |
| useReducer | Cart and Orders |
| useMemo | Menu filtering, Order Summary |
| useCallback | Menu handlers, reservation |
| Custom hooks | useForm, useDebounce, useReservation |
| React.memo | MenuItemCard |

## Cart reducer test cases
| Action | Initial state | Expected |
|---|---|---|
| ADD_ITEM | empty | one item quantity 1 |
| ADD_ITEM | item qty 1 | same item qty 2 |
| INCREMENT | qty 1 | qty 2 |
| DECREMENT | qty 2 | qty 1 |
| DECREMENT | qty 1 | item removed |
| APPLY_PROMO | no promo | WELCOME10 gives 10% |
| REMOVE_PROMO | 10% promo | 0% discount |
| CLEAR_CART | items present | empty cart |

## Demo video
Record the complete flow in Expo Go (maximum 3 minutes) and paste the link here before submission:
`[PASTE YOUR GOOGLE DRIVE / YOUTUBE UNLISTED LINK HERE]`

## Important
This is a frontend-only prototype. No backend, real payment gateway, push notification service, or external API is required.
