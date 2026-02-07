/* eslint-disable max-len */
/* eslint-disable quotes */
"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword("Password1!")).toBe("boolean");
  });

  it(`valid password with 8 characters`, () => {
    expect(checkPassword("Pass1ord!")).toBe(true);
  });

  it(`valid password with  8 < characters < 16`, () => {
    expect(checkPassword("Super$ec1rP@ss")).toBe(true);
  });

  it(`invalid password with less than 8 characters`, () => {
    expect(checkPassword("Pass!1")).toBe(false);
  });

  it(`invalid password with more than 16 characters`, () => {
    expect(checkPassword("Pas!1wordworld@@sad")).toBe(false);
  });

  it(`invalid password without uppercase letter`, () => {
    expect(checkPassword("password@34")).toBe(false);
  });

  it(`invalid password without special character`, () => {
    expect(checkPassword("Password34")).toBe(false);
  });

  it(`invalid password without digit`, () => {
    expect(checkPassword("P@$$word")).toBe(false);
  });

  it(`invalid password with cyrillic letters`, () => {
    expect(checkPassword("СуперСекюр!%%23")).toBe(false);
  });
});
