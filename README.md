# class-renamer
Small library for renaming classes in JavaScript.  
Very handy for class factories

## Usage
```
const createSwaggerException = (name, options) => {
  class SwaggerException {
    constructor({ message, reason, extra }) {
      this.message = message ?? options.message;
      this.reason = reason ?? options.reason;
      this.extra = extra ?? options.extra;
    }
  }

  return renameClass(SwaggerException, name);
};

const OrderNotFoundException = createSwaggerException('OrderNotFoundException', {
  message: 'Order not found',
  reason: 'order-not-found',
  extra: null
});

console.log(OrderNotFoundException); 
// [class OrderNotFoundException]
```
