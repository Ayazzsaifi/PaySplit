# PaySplit 💸

A bill-splitting web app built on the MERN stack with Razorpay payments. Create groups, add shared expenses, see who owes whom, and settle up online.

> **Status:** Backend complete and tested. Frontend in progress.

**Live demo:** TODO (add link after deployment)

## Features

- JWT authentication with bcrypt-hashed passwords
- Create and delete groups (only the creator can delete)
- Add expenses to a group, split equally across members
- Per-user balance calculation across all groups
- Razorpay order creation for settling payments
- Dark, minimal UI with Tailwind CSS

**Planned:** email/WhatsApp reminder when someone owes money.

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React (Vite), React Router, Context API, Tailwind CSS v4 |
| Backend | Node.js, Express.js (ES modules) |
| Database | MongoDB Atlas, Mongoose |
| Auth | JWT, bcrypt |
| Payments | Razorpay |

## Architecture Notes

- `Split` is its own collection instead of being nested inside `Expense`, so all debts for one user can be fetched in a single query.
- Auth middleware protects all group, expense and payment routes.

## API Endpoints

| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register |
| POST | `/api/auth/login` | Login, returns JWT |
| POST | `/api/group/createGroup` | Create a group |
| GET | `/api/group/getGroups` | List your groups |
| GET | `/api/group/getGroups/:groupId` | Get one group |
| DELETE | `/api/group/deleteGroup/:groupID` | Delete (creator only) |
| POST | `/api/expense/...` | TODO: fill in exact routes |
| GET | `/api/expense/...` | TODO: group expenses, user balances |
| POST | `/api/payment/...` | TODO: create Razorpay order |

## Getting Started

### Prerequisites
- Node.js
- A MongoDB Atlas cluster
- A Razorpay test account

### Setup
```bash
git clone TODO-your-repo-url
cd paysplit
```

**Backend**
```bash
cd backend
npm install
npm run dev   # TODO: confirm your script name
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
Create a `.env` in the backend folder:

```
TODO: list your variable names here (no real values!)
```

## Screenshots
TODO: dashboard, group detail, add-group modal

## What I Learned
- Consistent `req` property naming across middleware and controllers, or bugs fail silently
- Comparing MongoDB ObjectIds needs `.toString()`
- Initialising Razorpay inside the handler so env vars are loaded first
- Handling CORS between the Vite dev server and Express

## Roadmap
- [ ] Finish frontend (signup, group detail, expense feed)
- [ ] Razorpay checkout on the frontend
- [ ] Deploy
- [ ] Reminder notifications for pending dues

## Author
**Mohd Ayaz Saifi**
[GitHub](https://github.com/Ayazzsaifi) · [LinkedIn](https://linkedin.com/in/mohd-ayaz-59b142253) 
 [Portfolio]