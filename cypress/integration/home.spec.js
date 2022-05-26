/* eslint-disable no-undef */
describe("Navigation", () => {
  it("should navigate to the home page and check if the button exists", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").get("span");
  });

  it("should click on the button and check if the picture is valid or no", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").click();

    cy.get("div").contains("Room lighting is too low" || "Picture Taken!");
  });

  it("should show an Accepted status", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").click();

    cy.get("div").contains("Accepted");
  });

  it("should show an Rejected status", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").click();

    cy.get("div").contains("Rejected");

    cy.get("button").get("span").contains("RETAKE PICTURE");
  });
});
