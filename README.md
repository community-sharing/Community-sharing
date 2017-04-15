# Community-Sharing

You'll fins us online @ https://community-sharing.herokuapp.com/#/

## Getting started

```
git clone https://github.com/community-sharing/Community-sharing.git
cd Community-sharing
npm install
npm run knex migrate:latest
npm run knex seed:run

```

**To start the server, run `npm run dev`, and go to http://localhost:3000/**

## Planning

![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/Brainstorm.jpg)

##### Problem
- Require something
- Communication
- Money

##### Solution
###### An application that connects users to allow them to easily share their resources within the community
- By making an online community resource.

##### User Stories
- As a user, I would like to borrow an item
  + I would like to be able to search for an item based on
    + Location
    + Availability
    + 'Thing' category
  + A search will return a list of results (name, photo, location)
  + I can select list item and it will bring up more details to do with the item.
  + On the item profile there will be a request button.
  + Request button will take us to a page where users can see on request form with
    + Item Name
    + T's & C's
    + Date's Booked
    + Submit button
  + Confirmation page to notify the user their request has been sent and the lender will get in touch with them soon.


- As a user, I would like to lend out my item/s
  + I want to be able to list an item to lend
    + Fill in a form thats gonna describe the item and submit form with a button.
    + I will receive a confirmation about item listing
  + I want to be able to receive requests from other users (notification on page/email)
    + I want to be able to accept or reject requests
      - Accept: Further communication
      - Decline: Short message + decline header icon
  + I want to be able to communicate with a borrower
    + Phone
    + Email
    + Chat
  + I want to be able to manage my listings


- User user story: (Logged in)
  + As a user I have access to lending and borrowing
  + I will be able to manage my profile
    + items lending (current)
    + items borrowing (current)
    + personal details
    + pending request
    + location
  + As a user I want to be able to review other users

### MVP

#### (V1)

- Be able to display list of items to be borrowed
- Submit a request to borrow
- View details on an item
- Accept a request to borrow
- Post item to lend
- Auth & Registration
- User Profile Dashboard

#### (V2)

- Search Engine to find items
- User communications eg. messaging system
- Rating system
- List wanted items
- Entend home page content

### TECHNOLOGIES

- HTML
- CSS - **SASS**
- React
- Redux
- Express
- Knex
- React Router
- **Passport (passport-local)**
- **Sodium**

### UI / WIREFRAMES
**Pages**


- Title & Navbar

- HomePage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/Home.jpg)

- LenderFormPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/LenderForm.jpg)

- ListingPage or ListPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/ListPage.jpg)

- ListItemPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/ListItem.jpg)

- Dashboard/Profile Page
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/Profile.jpg)

- Login/RegisterFormPage
![alt tag](https://github.com/community-sharing/Community-sharing/blob/master/pictures/RegisterForm.jpg)

### Database Structure

Users    |
---------|
user_id  |
fname    |
lname    |
email    |
phone    |
hash     |
address  |
suburd   |
town/city|
postcode |
user_image_url|

Items     |
----------|
item_id   |
item_name |
category  |
description|
location  |
image_url |
owner_id  |
available |

Loans      |
-----------|
loan_id    |
lenders_id |
borrower_id|
item_id    |
pickup     |
dropoff    |

# Taking care of ourselves and roles.

## Times
Times:          | Days
----------------|------------
Weekdays        | 9am-9pm
Weekends        | 9am-9pm

###### Breaks: 1 hour for lunch and a break for dinner.

## Meals
Meals           | Times/Days
----------------|------------
Lunch           |
Dinner          |

## Roles

**Project Manager:**
Ensuring we all understand the layout of the project, milestones and issues.

**Minister of EE**
Coming up with enjoyable games, and having comms making sure everyones all good, sorting out mindfulness time?

**Product Owner**
Ensuring the product matches the users stories, ensuring the product has consistency.

**Git Master**
Dealing with pull request by making sure its pushed to the right branch and fixing merge conflicts, helping out with git problems.

Roles           | Name:
----------------|--------
Project Manager | Pou
Minister of EE  | Dan
Product Owner   | Jon
Git Master      | Todd

## Conflict Management
- If its product related lets re-group and seek clarification.
- Talk it out
- Sarah (EE)
