import { APILoadData } from "./API";

describe("API", () => {
	// Optional testing case

  it("will check if inital data ist loaded through APILoadData", async () => {
   
    const { users, questions } = await APILoadData();

    expect(users).toBeDefined();
    expect(questions).toBeDefined();
  });
});