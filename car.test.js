const Car = require("./car");

// const car = new Car();
// const car1 = new Car();
// const car2 = new Car();


describe("The Car class", () => {
  let car, car1, car2;
  beforeEach(() => {
    car = new Car();
    car1 = new Car();
    car2 = new Car();
    arr = [1,2,3];
  });
  afterEach(() => {
    console.log(`arr became ${arr}`);
  });
  test("has four wheels", () => {
    // let car = new Car();
    expect(car.wheels).toBe(4);
  });
  xtest('has bad wheels', () => {
    // let car = new Car();
    expect(car.wheels).toBe(3);
  });
  test('has null mileage', () => {
    // let car = new Car();
    expect(car.mileageInfo).toBeNull();
  });
  test('two new cars are equal objects', () => {
    // let car1 = new Car();
    // let car2 = new Car();
    expect(car1).toEqual(car2);
  });
  test('does not have doors', () => {
    // let car = new Car();
    expect(car.doors).toBeUndefined();
  });
  test('throws error when trying to drive', () => {
    // let car = new Car();
    expect(() => car.drive()).toThrow(TypeError);
  });
  test('wheels them truthy', () => {
    // let car = new Car();
    expect(car.wheels).toBeTruthy();
  });
  test('array contains car', () => {
    // let car = new Car();
    // let arr = [1,2,3];
    arr.push(car);
    expect(arr).toContain(car);
  });
});
