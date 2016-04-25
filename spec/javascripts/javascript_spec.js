describe('An Object in JavaScript', function() {
  it('is a function', function() {
    expect(typeof ShoppingCart).toEqual("function");
  });

  it('is instantiated with the "new" operator', function() {
    var cart = new ShoppingCart();
    expect(cart).toBeDefined();
  });

  it('is empty when no items are in the cart', function() {
    var cart = new ShoppingCart();
    expect(cart.items).toEqual([]);
  });

  it('is not empty when one item is in the cart', function() {
    var cart = new ShoppingCart();
    expect(typeof ShoppingCart.prototype.fill).toEqual("function");
    cart.fill("cans of ready-made spaghetti");
    expect(cart.items).toContain("cans of ready-made spaghetti");
  });
});
