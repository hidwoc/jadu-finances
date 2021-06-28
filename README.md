# Jadu Finances



## Project Description

Jadu Finances tracks the finances of my small business "Jadu Banchan". Due to the current nature of the business, finances are tracked on a batch basis (which roughly correlate to months). On the summary/landing page the business owner is able to see a summary of their sales, expenses and net profit for the selected batch, as well as total sales/expenses over time (PMVP). The sales page will display the current batch's sales divided into categories and they are able to add sales. The expenses page will display the selected batch's expenses divided into categories and they are able to add expenses. 

## Wireframes
////////////////

The wireframes below depict the homepage and review feed for What-cha-Think in web, tablet and phone format. The homepage contains a header displaying the app title and three clickable icons - movies, television and sports - that route to each respective review feed. The review feeds contain an input form and submit button for review data. Below the form is a feed of all past forms, along with a delete button for each post. The screens will center as screen size decreases.

![imageAlt](https://i.imgur.com/IX2UVl9.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/PhRA82l.png)

## API and Data Sample

I'll need to use at least 2 API calls - one for sales, one for expenses, and potentially additional for following batches.

https://api.airtable.com/v0/appZxWoXguPFRSCON/may_sales
https://api.airtable.com/v0/appZxWoXguPFRSCON/may_expenses


May_Sales Airtable Sample

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
                "Customer": "Ash Suh"
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
                "Customer": "Frank & Christine"
            },
            "createdTime": "2021-06-28T01:34:53.000Z"
        }
    ],
    "offset": "rec4B8F1QoeDxZCCK"
}
```

May_Expenses Airtable Sample

```
{
    "records": [
        {
            "id": "recHbCK7Vc3qgaoTK",
            "fields": {
                "#": 7,
                "Description": "Fermentation Container",
                "Quantity": "11L",
                "Category": "Supplies",
                "Amount": 42.45,
                "Vendor": "Amazon"
            },
            "createdTime": "2021-06-28T01:41:19.000Z"
        },
        {
            "id": "recgjVt3MLPVuys1E",
            "fields": {
                "#": 8,
                "Description": "Mixing Bowl",
                "Category": "Supplies",
                "Amount": 10
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
4. Add expense/sale button
5. Form
6. Category/Product Input: Dropdown Menu
7. Nav Bar
8. Details (Expenses, Sales)
9. Summary
10. Select Batch Dropdown Menu


#### PostMVP

- Login Form
- Allow editing/deleting posts (via mouse-over icon change to edit and additional delete button on the Form component)
- Populate Select Batch Dropdown Menu with additional batches and allow Add Batch option
- Select Batch Dropdown Menu renders appropriate batch's summary, expense and sales details
- Sales / Expenses over time on summary page
- Ability to add categories on Form and render financial calculations and donut summary appropriately
- Group ingredient expenses together on Donut Chart
- Highlight Donut Chart category on calculation hover (and vice-versa)
- On Donut/Calculation category click, filter Details Table to show only entries in that category


## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Oct 9-11 | Proposal Approval / Airtable Setup         | Complete |
| Oct 12   | Component Creation / Get, Set, Delete Data | Complete |
| Oct 13   | Oct. 12 cont'd / CSS Components            | Complete |
| Oct 14   | CSS Components cont'd / MVP                | Complete |
| Oct 15   | Advanced CSS                               | Complete |
| Oct 16   | Presentations                              | Complete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |     .5hrs      |      1hr      |     1hr     |
| Clickable icons           |    H     |      1hrs      |      1hr      |     1hr     |
| Data population pg 1      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data population pg 2      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Data population pg 3      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Form creation pg 1        |    H     |      2hrs      |     2hrs      |    2hrs     |
| Form creation pg 2        |    H     |      2hrs      |     1 hr      |    1 hr     |
| Form creation pg 3        |    H     |      2hrs      |     1 hr      |     1hr     |
| Data creation/update pg 1 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data creation/update pg 2 |    H     |      3hrs      |      1hr      |     1hr     |
| Data creation/update pg 3 |    H     |      3hrs      |      1hr      |     1hr     |
| Data deletion pg 1        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 2        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 3        |    H     |      2hrs      |      1hr      |     1hr     |
| Component CSS pg 1        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 2        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 3        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |    42.5hrs     |     35hrs     |    35hrs    |

## SWOT Analysis

### Strengths:



### Weaknesses:

I am still not terribly clear on CRUD and how to make sure I can carry each aspect out for this project. Additionally, I prefer to stick to functional components but given the parameters of the project, I'll need to use class components, as well. I will likely use most of my research time/manager help on these matters.

### Opportunities:

This project is the culmination of the last 2 weeks and will give me an opportunity to solidify my understanding of react. I also happen to be interested in the function of my app given my interests, so I am motivated to make it look usable and attractive.

### Threats:

Whenever I get stuck with an error or an issue, I tend to go down a rabbit hole of online searches and debugging. Often times, I don't timebox these episodes and lose a lot of time. While this is typically a favorable characteristic in a developer, I'll need to make sure I know when to ask for help.