interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pending: This is a demo task",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "In-Progress: This is a demo task",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Completed: This is a demo task",
      status: "done",
      createdAt: Date.now() - 100000,
    },
  ],
};
