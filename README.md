# The Wild Oasis - web app
https://oasisdemo.vercel.app


# Tech Stack for Hotel Management Application

## Frontend
- **Framework**: React.js
- **State Management**: Redux, ContextApi
- **Routing**: React Router
- **UI Icons**: react-icons
- **Form Management**: react-hook-form
- **Toast Notifications**: react-hot-toast

## Backend
- **Database**: Supabase
- **Authentication**: Supabase Auth

## User Management
- Users of the app are hotel employees.
- New users can only be signed up inside the application to ensure only actual hotel employees can get accounts.
- Users should be able to upload an avatar, change their name, and password.

## Cabin Management
- App needs a table view with all cabins.
- Display cabin photo, name, capacity, price, and current discount.
- Users can update, delete, or create new cabins (including uploading a photo).

## Booking Management
- App needs a table view with all bookings.
- Display arrival and departure dates, status, and paid amount.
- Booking status: "unconfirmed", "checked in", or "checked out".
- Filter bookings by status.
- Additional booking data: number of guests, number of nights, guest observations, breakfast booking, breakfast price.
- Users can delete, check in, or check out a booking.
- Users need to confirm payment on check-in.

## Guest Data
- Guest data includes full name, email, national ID, nationality, and a country flag for easy identification.

## Dashboard
- Initial app screen is a dashboard.
- Display important information for the last 7, 30, or 90 days.
- List guests checking in and out on the current day.
- Statistics on recent bookings, sales, check-ins, and occupancy rate.
- Chart showing daily hotel sales, including "total" and "extras" sales (e.g., breakfast).
- Chart showing statistics on stay durations.

## Application Settings
- Users can define application-wide settings:
  - Breakfast price
  - Min and max nights/booking
  - Max guests/booking

## Dark Mode
- App supports dark mode.
