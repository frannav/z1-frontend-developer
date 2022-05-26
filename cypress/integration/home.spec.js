/* eslint-disable no-undef */
describe("Navigation", () => {
  it("should navigate to the home page and check if the button exists", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").get("span");
  });

  it("should click on the button and check if the picture is valid or no", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").click();

    cy.get("button").click();
  });
});
