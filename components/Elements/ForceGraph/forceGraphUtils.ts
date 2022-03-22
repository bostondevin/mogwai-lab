export const sampleData = {
  nodes: [
    {
      id: "smith-household",
      accountValue: 2498452.98,
      accountNumber: "8374-9932",
      label: "Smith Family Household",
      type: "household",
      vx: 3,
      vy: 3,
    },
    {
      id: "smith-betty-client",
      accountNumber: "8374-9932",
      accountValue: 2431760.36,
      label: "Betty Smith",
      type: "client",
      vx: 1,
      vy: 1,
    },
    {
      id: "smith-betty-account-ira",
      accountNumber: "8374-9932",
      accountValue: 1231.55,
      label: "Betty Smith's IRA",
      type: "account",
      vx: 1,
      vy: 1,
    },
    {
      id: "smith-betty-account-401k",
      accountNumber: "8374-9932",
      accountValue: 1431760.36,
      label: "Betty Smith's 401k",
      type: "account",
      vx: 1,
      vy: 1,
    },

    {
      id: "smith-fred-client",
      accountNumber: "8374-9932",
      accountValue: 1000000.0,
      label: "Fred Smith",
      type: "client",
      vx: 1,
      vy: 1,
    },
    {
      id: "smith-fred-account-ira",
      accountNumber: "8374-9932",
      accountValue: 4832.61,
      label: "Fred Smith's IRA",
      type: "account",
      vx: 1,
      vy: 1,
    },
    {
      id: "smith-fred-account-401k",
      accountNumber: "8374-9932",
      accountValue: 61862.21,
      label: "Fred Smith's 401k",
      type: "account",
      vx: 1,
      vy: 1,
    },
  ],
  links: [
    { source: "smith-household", target: "smith-betty-client" },
    { source: "smith-household", target: "smith-fred-client" },
    {
      source: "smith-betty-client",
      target: "smith-betty-account-ira",
    },
    {
      source: "smith-betty-client",
      target: "smith-betty-account-401k",
    },
    /*
    {
      source: "smith-betty-client",
      target: "smith-fred-account-401k",
      type: "joint",
    },*/

    {
      source: "smith-fred-client",
      target: "smith-fred-account-ira",
      value: 8,
    },

    {
      source: "smith-fred-client",
      target: "smith-fred-account-401k",
      value: 10,
    },
  ],
};
