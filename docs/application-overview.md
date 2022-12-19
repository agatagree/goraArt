# 💻 Application Overview

The application is a virtual painting galllery. 

Users can check works of defined painter, and order them, save as favourites o their profile. Artist as an admin can add new painting and check orders.


[Demo] here soon 🚀

## Data model

The application contains the following models:

- User - can have one of these roles:

  - `ADMIN` can:
    - create/edit/delete painting
    - add/remove painting to the homepageBanner
    - see list of orders / change order status
    - enter to admin page by login page
  - `USER` - can:
    - edit own profile
    - add/delete painting to favourites
    - check order status
    - buy items
    - see gallery page and filter/sort through them
    - login / register / ask for password reminder

