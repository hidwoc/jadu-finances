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

    // ** SAME FOR EXPENSES / SALES ** //
    this.totalKimchi = Number(
      this.data
        .filter((entry) => entry.fields.category === "Kimchi")
        .reduce(this.reducer(), 0)
        .toFixed(2)
    );
    this.totalJalapenos = Number(
      this.data
        .filter((entry) => entry.fields.category === "Jalapenos")
        .reduce(this.reducer(), 0)
        .toFixed(2)
    );

    this.totalBeans = Number(
      this.data
        .filter((entry) => entry.fields.category === "Beans")
        .reduce(this.reducer(), 0)
        .toFixed(2)
    );

    // * SALES CALCULATIONS * //
    this.totalDeliveryFee = Number(
      this.data
        .filter((entry) => entry.fields.chargedDeliveryFee === "true")
        .reduce((accumulator) => accumulator + 4, 0)
        .toFixed(2)
    );

    this.totalJarDiscount = Number(
      this.data
        .filter((entry) => entry.fields.jarDiscount)
        .reduce(
          (accumulator, entry) => accumulator + entry.fields.jarDiscount,
          0
        )
        .toFixed(2)
    );

    this.totalSales =
      this.totalKimchi +
      this.totalJalapenos +
      this.totalBeans +
      this.totalDeliveryFee -
      this.totalJarDiscount;

    // * EXPENSES CALCULATIONS * //
    this.totalExpenses = Number(this.data.reduce(this.reducer(), 0).toFixed(2));

    this.totalIngredients =
      this.totalKimchi + this.totalBeans + this.totalJalapenos;

    this.totalPackaging = Number(
      this.data
        .filter((entry) => entry.fields.category === "Packaging")
        .reduce(this.reducer(), 0)
        .toFixed(2)
    );

    this.totalSupplies = Number(
      this.data
        .filter((entry) => entry.fields.category === "Supplies")
        .reduce(this.reducer(), 0)
        .toFixed(2)
    );

    this.totalDelivery = Number(
      this.data
        .filter((entry) => entry.fields.category === "Delivery")
        .reduce(this.reducer(), 0)
        .toFixed(2)
    );

    // ** DONUT OBJECTS ** //
    this.donutSales = {
      labels: ["Kimchi", "Jalapenos", "Beans", "Delivery Fee"],
      datasets: [
        {
          label: "Total Category Sales",
          data: [
            this.totalKimchi,
            this.totalJalapenos,
            this.totalBeans,
            this.totalDeliveryFee,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    this.donutExpenses = {
      labels: [
        "Packaging",
        "Supplies",
        "Delivery",
        "Kimchi",
        "Jalapenos",
        "Beans",
      ],
      datasets: [
        {
          label: "Total Category Expenses",
          data: [
            this.totalPackaging,
            this.totalSupplies,
            this.totalDelivery,
            this.totalKimchi,
            this.totalJalapenos,
            this.totalBeans,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
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
