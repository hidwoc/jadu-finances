<!-- CODENAME: BANANA -->
# Jadu Finances



## Project Description

Jadu Finances tracks the finances of my small business "Jadu Banchan". Due to the current nature of the business, finances are tracked on a batch basis (which roughly correlate to months). On the summary/landing page the business owner is able to see a summary of their sales, expenses and net profit for the selected batch, as well as total sales/expenses over time in the form of a combo (bar and line) chart (PMVP). The sales page will display the current batch's sales divided into categories and they are able to add sales entries. The expenses page will display the selected batch's expenses divided into categories and they are able to add expenses. 

## Wireframes

### Desktop

![Desktop1 Sumary](https://user-images.githubusercontent.com/83293460/123810022-16a27c80-d8c0-11eb-9f16-dbab28009ba1.png)

![Desktop2 Expense](https://user-images.githubusercontent.com/83293460/123721274-f63cd880-d853-11eb-9af1-35b0dc1ef6f2.png)
![Desktop3 Form](https://user-images.githubusercontent.com/83293460/123721282-f9d05f80-d853-11eb-84d4-885230918bec.png)

### Mobile

![Mobile1 SUMMARY](https://user-images.githubusercontent.com/83293460/123809999-11453200-d8c0-11eb-8194-16507f7331de.png)

![Mobile6 Form](https://user-images.githubusercontent.com/83293460/123721305-048af480-d854-11eb-801f-5ec3cee911dd.png)

![Mobile2 SALES1](https://user-images.githubusercontent.com/83293460/123721300-03f25e00-d854-11eb-80bb-de29c3a64628.png)
![Mobile4 EXPENSES1](https://user-images.githubusercontent.com/83293460/123721302-03f25e00-d854-11eb-8de8-14c62b32985b.png)
![Mobile3 SALES2](https://user-images.githubusercontent.com/83293460/123721301-03f25e00-d854-11eb-8c86-286c48d8c2e0.png)
![Mobile5 EXPENSES2](https://user-images.githubusercontent.com/83293460/123721303-048af480-d854-11eb-80b0-733bdf351661.png)


## Component Hierarchy

![Jadu-Finances Component Hierachy](https://user-images.githubusercontent.com/83293460/123825774-2f655f00-d8cd-11eb-9b3a-94651e27e7b1.png)

## API and Data Sample

I'll need to use at least 2 API calls - one for sales, one for expenses, and potentially additional for following batches.

https://api.airtable.com/v0/appZxWoXguPFRSCON/sales

https://api.airtable.com/v0/appZxWoXguPFRSCON/expenses


Sales Airtable Sample

```
{
    "records": [
        {
            "id": "recYfbJfktNOa5PH3",
            "fields": {
                "#": 6,
                "Jar Discount": -3,
                "Amount": 15,
                "Product": "Kimchi",
                "Quantity": "1",
                "Customer": "Ash Suh",
                "Batch": "MAY"
            },
            "createdTime": "2021-06-28T01:33:03.000Z"
        },
        {
            "id": "rec4B8F1QoeDxZCCK",
            "fields": {
                "#": 8,
                "Amount": 15,
                "Product": "Kimchi",
                "Delivery Fee?": true,
                "Quantity": "1",
                "Customer": "Frank & Christine",
                "Batch": "MAY"
            },
            "createdTime": "2021-06-28T01:34:53.000Z"
        }
    ],
    "offset": "rec4B8F1QoeDxZCCK"
}
```

Expenses Airtable Sample

```
{
    "records": [
        {
            "id": "recHbCK7Vc3qgaoTK",
            "fields": {
                "#": 7,
                "Category": "Supplies",
                "Amount": 42.45,
                "Description": "Fermentation Container",
                "Vendor": "Amazon",
                "Quantity": "11L",
                "Batch": "MAY"
            },
            "createdTime": "2021-06-28T01:41:19.000Z"
        },
        {
            "id": "recgjVt3MLPVuys1E",
            "fields": {
                "#": 8,
                "Category": "Supplies",
                "Amount": 10,
                "Description": "Mixing Bowl",
                "Batch": "MAY"
            },
            "createdTime": "2021-06-28T01:41:55.000Z"
        },
    ],
    "offset": "recf15DGBYBLmGISB"
}
```

### MVP/PostMVP

#### MVP

- Successful API GET calls to Airtable may_sales and may_expenses tab.
- Populate Select Batch Dropdown Menu with batches and render appropriate batch's summary, expense and sales details
- Render financial calculations by category, total expense, total sales, and net income.
- Render donut chart summary breaking down finances into appropriate categories.
- Render table displaying sales/expense entries.
- Add sale/expense button that links to Form component that successfully POSTS a new entry.
- Nav Bar that links to summary, expenses, sales components
- Media Query
- Select Batch Dropdown Menu
- At least 6 Rendered Components Required:
1. Financial Calculations
2. Donut Chart
3. Entries Table
4. Nav Bar
5. Details (Expenses, Sales)
6. Summary
7. Select Batch Dropdown Menu
8. To Form button
9. Form
10. Category/Product Input: Dropdown Menu


#### PostMVP

- Combo Chart on Summary
- Allow editing/deleting posts (via mouse-over icon change to edit and additional delete button on the Form component)
- Add Batch option
- Sales / Expenses over time on summary page
- Group ingredient expenses together on Donut Chart
- Highlight Donut Chart category on calculation hover (and vice-versa)
- On Donut/Calculation category click, filter Details Table to show only entries in that category
- Ability to add categories on Form and render financial calculations and donut summary appropriately ???


## Project Schedule

| Day    | Deliverable                                                  | Status      |
| ------ | ------------------------------------------------------------ | ----------- |
| Jun 29 | Proposal Approval, Airtable Setup, Donut Chart Setup         | Pending     |
| Jun 30 | Link/Route Skeleton, Component Creation, Successful API GET  | Not Started |
| Jul 1  | Render Components, Successful API POST                       | Not Started |
| Jul 2  | Deploy, CSS, Media Query                                     | Not Started |
| Jul 6  | Advanced CSS (Transitions, onHover effects), Combo Chart     | Not Started |
| Jul 7  | Presentations                                                | Not Started |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      3hrs      |     2hrs      |    hrs     |
| Airtable setup            |    H     |     .5hrs      |   .25hrs      |     hr     |
| Donut Chart Research      |    H     |       2hr      |      hr      |     hr     |
| Link/Route Skeleton       |    H     |       1hr      |     hrs      |    hrs     |
| API GET Request           |    H     |       1hr      |      hr      |     hr     |
| Nav Component             |    H     |       2hr      |     hrs      |    hrs     |
| BatchMenu Component       |    H     |       1hr      |      hr      |     hr     |
| Table Component           |    H     |    1.5hrs      |      hr      |     hr     |
| Render Results            |    H     |      3hrs      |      hr      |     hr     |
| Calculations Component    |    H     |      2hrs      |     hrs      |    hrs     |
| DonutChart Component      |    M     |      3hrs      |      hr      |     hr     |
| Details Component         |    H     |      2hrs      |     hrs      |    hrs     |
| Summary Component         |    H     |    1.5hrs      |     hrs      |    hrs     |
| Basic CSS                 |    H     |      3hrs      |     hrs      |    hrs     |
| ToForm Component          |    H     |      .5hr      |      hr      |     hr     |
| Form Component            |    H     |       1hr      |      hr      |     hr     |
| API POST Request          |    H     |       1hr      |     hrs      |    hrs     |
| CategoryDropdown Component|    M     |      2hrs      |      hr      |     hr     |
| Media Query               |    H     |      3hrs      |      hr      |     hr     |
| Debugging                 |    H     |      3hrs      |      hr      |     hr     |
| MVP Total                 |    H     |     37hrs      |     hrs      |    hrs     |
| Combo Chart               |    M     |      3hrs      |     hrs      |    hrs     |
| Advanced CSS              |    L     |      3hrs      |     hrs      |    hrs     |
| API PUT Request           |    M     |     .5hrs      |     hrs      |    hrs     |
| API DELETE Request        |    M     |     .5hrs      |     hrs      |    hrs     |
| Adjust Components for PUT/DELETE| M  |      2hrs      |      hr      |     hr     |
| Filter Table              |    L     |      2hrs      |     hrs      |    hrs     |
| Add Additional Batches    |    L     |      3hrs      |     hrs      |    hrs     |
| Render Components by Batch|    L     |      2hrs      |     hrs      |    hrs     |
| PMVP Total                |    L     |     16hrs      |     hrs      |    hrs     |

## SWOT Analysis

### Strengths:

I feel quite confident with the React framework and I have a very clear understanding of the Airtable data I am using and what I want to do with it. I've also thought out my wireframe with great detail as compared to P1 and my components are all broken down into smaller, very manageable tasks so I expect a consistent workflow without ambiguity on what I want or what I should be doing to slow me down.

### Weaknesses:

This app is very reliant on data visualization and presentation so I will need to spend quite some time on CSS this time around. Although CSS is where I feel the least confident, I have already learned valuable lessons from previous assignments (such as taking the time to give JSX elements proper containers, classNames and IDs) and I am much more motivated to create an app that is as pleasant to look at as it is functional.

### Opportunities:

Due to my deep understanding of the data I will be using as well as my experience configuring budgets to render data that is useful and informative, I feel that the Calculations component will be an area for me to showcase my pre-software engineering skillset combined with what I have learned in the past few weeks. 

### Threats:

The Donut Chart! It is a complete unknown and is the one thing that could throw off my entire project schedule and leave me strapped for time to work on the CSS. My backup plan is to scrap the donut chart altogether and focus on the entries table and calculations but that would be highly disappointing. 
