export const baseURLSales = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/sales`;
export const baseURLExpenses = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/expenses`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

/// *** CALCULATION OBJECT *** ///
export class Calculations {
  constructor(data) {
    this.data = data;

    // ** EXPENSES AND SALES [0, 1, 2] ** //
    this.calculations = [
      {
        name: "Kimchi",
        className: "expenses sales",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.category === "Kimchi")
            .reduce(this.reducer(), 0)
            .toFixed(2)
        ),
      },
      {
        name: "Jalapenos",
        className: "expenses sales",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.category === "Jalapenos")
            .reduce(this.reducer(), 0)
            .toFixed(2)
        ),
      },
      {
        name: "Beans",
        className: "expenses sales",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.category === "Beans")
            .reduce(this.reducer(), 0)
            .toFixed(2)
        ),
      },
      // * SALES CALCULATIONS [3, 4] * //
      {
        name: "Delivery Fee",
        className: "sales",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.chargedDeliveryFee === "true")
            .reduce((accumulator) => accumulator + 4, 0)
            .toFixed(2)
        ),
      },
      {
        name: "Jar Discount",
        className: "sales",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.jarDiscount)
            .reduce(
              (accumulator, entry) => accumulator + entry.fields.jarDiscount,
              0
            )
            .toFixed(2)
        ),
      },
      // * EXPENSES CALCULATIONS [5, 6, 7] * //
      {
        name: "Packaging",
        className: "expenses",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.category === "Packaging")
            .reduce(this.reducer(), 0)
            .toFixed(2)
        ),
      },
      {
        name: "Supplies",
        className: "expenses",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.category === "Supplies")
            .reduce(this.reducer(), 0)
            .toFixed(2)
        ),
      },
      {
        name: "Delivery",
        className: "expenses",
        sum: Number(
          this.data
            .filter((entry) => entry.fields.category === "Delivery")
            .reduce(this.reducer(), 0)
            .toFixed(2)
        ),
      },
    ];

    this.grandTotals = [
      {
        name: "Total Sales",
        className: "sales",
        sum:
          this.calculations[0].sum +
          this.calculations[1].sum +
          this.calculations[2].sum +
          this.calculations[3].sum -
          this.calculations[4].sum,
      },
      {
        name: "Total Expenses",
        className: "expenses",
        sum: Number(this.data.reduce(this.reducer(), 0).toFixed(2)),
      },
      {
        name: "Total Ingredients",
        className: "expenses",
        sum:
          this.calculations[0].sum +
          this.calculations[1].sum +
          this.calculations[2].sum,
      },
    ];
    
    this.netIncome = {
      name: "Net Income",
      sum: this.grandTotals[0] - this.grandTotals[1],
    };

    // ** DONUT OBJECTS ** //
    this.donutSales = {
      labels: ["Kimchi", "Jalapenos", "Beans", "Delivery Fee"],
      datasets: [
        {
          label: "Total Category Sales",
          data: [
            this.calculations[0].sum,
            this.calculations[1].sum,
            this.calculations[2].sum,
            this.calculations[3].sum,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    this.donutExpenses = {
      labels: [
        "Kimchi",
        "Jalapenos",
        "Beans",
        "Packaging",
        "Supplies",
        "Delivery",
      ],
      datasets: [
        {
          label: "Total Category Expenses",
          data: [
            this.calculations[0].sum,
            this.calculations[1].sum,
            this.calculations[2].sum,
            this.calculations[5].sum,
            this.calculations[6].sum,
            this.calculations[7].sum,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  reducer() {
    return (accumulator, entry) => accumulator + entry.fields.price;
  }
}
