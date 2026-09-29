# Restaurant App MVP

Frontend-only React Native / Expo prototype for Fall 2026 Assignment 1.

## Requirements
- Node.js 20+ recommended
- Expo Go on phone or an Android/iOS emulator

## Install & Run
```bash
npm install
npx expo start
```
Scan the QR code with Expo Go, or press `a` for Android / `i` for iOS.

## Demo Accounts
| Role | Email | Password |
|---|---|---|
| Customer | customer@demo.com | Customer1 |
| Manager | manager@demo.com | Manager1 |

## Repository Structure
- `A1/SRS.pdf` — Software Requirements Specification
- `A1/UML/` — Use Case, Class, Sequence, State Machine and Component diagrams
- `src/components` — reusable UI components
- `src/screens` — app screens
- `src/context` — Auth, Theme, Cart and Orders contexts
- `src/reducers` — reducer logic
- `src/hooks` — custom hooks
- `src/data` — mock local data
- `src/navigation` — stack and bottom-tab navigation

## Hook Coverage
| Hook | Main screen/module |
|---|---|
| useState | Login, Menu, Reservation, Profile |
| useEffect | Menu loading, Tracking timers, persistence |
| useRef | Menu search/list/render counter |
| useContext | Auth, Theme, Cart, Orders |
| useReducer | Cart and Orders |
| useMemo | Menu filtering/sorting and Order Summary |
| useCallback | Menu item handlers |
| React.memo | MenuItemCard |
| Custom hooks | useForm, useDebounce, useReservation |

## Context vs Prop Drilling
Context is suitable for authentication, theme, cart and orders because many screens need the same state. It avoids passing the same values through unrelated intermediate components. A drawback is that consumers can re-render when a context value changes, so context should be used for genuinely shared state.

## useReducer vs useState
The cart has several related transitions, so `useReducer` keeps actions and state changes centralized and predictable. A small independent value such as a search string is simpler with `useState`. `useState` would be enough for a cart with only one or two simple fields.

## Demo Video
Add the final screen-recording link here before submission.

## Test Cases
| Action | Initial State | Expected |
|---|---|---|
| ADD_ITEM | empty | item quantity 1 |
| ADD_ITEM same item | qty 1 | qty 2 |
| INCREMENT | qty 1 | qty 2 |
| DECREMENT | qty 2 | qty 1 |
| DECREMENT | qty 1 | item removed |
| APPLY_PROMO | no promo | discount stored |
| REMOVE_PROMO | promo active | discount 0 |
| CLEAR_CART | items present | empty cart |
