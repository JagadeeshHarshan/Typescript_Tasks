// Customer Information

let customerName: string = "Jagadeesh";
let customerId: number = 101;
let membershipType: string = "Gold";


// Product Information


let product = {
    productName: "Laptop",
    productCategory: "Electronics",
    productPrice: 50000,
    quantityPurchased: 1,
    stockAvailable: 10
};

// Primitive Data Types
let couponCode: string = "SAVE500";
let validCoupon: string = "SAVE500";
let couponDiscount: number = 500;
let gstRate: number = 18;
let deliveryCharge: number = 150;

// Type Inference
let orderStatus = "Pending";

// Type Assertion
let quantity = <number>product.quantityPurchased;


// Product Availability

if (product.stockAvailable > 0) {

    console.log("Product Available");

    // Unary Operator
    product.stockAvailable--;
    quantity++;

    
    // Subtotal Calculation

    let subtotal = product.productPrice * product.quantityPurchased;

    // Membership Discount

    let membershipDiscount = 0;

    if (membershipType === "Platinum") {
        membershipDiscount = subtotal * 0.20;
    }
    else if (membershipType === "Gold") {
        membershipDiscount = subtotal * 0.15;
    }
    else if (membershipType === "Silver") {
        membershipDiscount = subtotal * 0.10;
    }
    else {
        membershipDiscount = 0;
    }

    // Coupon Validation (Nested if)

    let totalDiscount = membershipDiscount;

    if (couponCode === validCoupon) {
        console.log("Coupon Applied");
        totalDiscount =+ couponDiscount;
    }
    else {
        console.log("Invalid Coupon");
    }

    // Bill Calculation

    let amountAfterDiscount = subtotal - totalDiscount;

    let gstAmount = amountAfterDiscount * gstRate / 100;

    let billBeforeDelivery = amountAfterDiscount + gstAmount;

    // Ternary Operator
    let finalDeliveryCharge =
        billBeforeDelivery >= 2000 ? 0 : deliveryCharge;

    let finalBill = billBeforeDelivery + finalDeliveryCharge;

    
    finalBill += 0;

    
    if (finalBill > 0) {
        orderStatus = "Order Confirmed";
    }

    // Switch Statement

    console.log("\nMembership Discount Details");

    switch (membershipType) {

        case "Platinum":
            console.log("20% Discount");
            break;

        case "Gold":
            console.log("15% Discount");
            break;

        case "Silver":
            console.log("10% Discount");
            break;

        default:
            console.log("No Discount");
    }

    // Invoice

    console.log(`
            ONLINE SHOPPING INVOICE

Customer Name       : ${customerName}
Customer ID         : ${customerId}
Membership          : ${membershipType}

Product Name        : ${product.productName}
Category            : ${product.productCategory}
Price               : ₹${product.productPrice}
Quantity            : ${product.quantityPurchased}


Subtotal            : ₹${subtotal}
Membership Discount : ₹${membershipDiscount}
Coupon Discount     : ₹${couponCode === validCoupon ? couponDiscount : 0}
Total Discount      : ₹${totalDiscount}
GST (18%)           : ₹${gstAmount}
Delivery Charge     : ₹${finalDeliveryCharge}


Final Payable       : ₹${finalBill}
Order Status        : ${orderStatus}
Remaining Stock     : ${product.stockAvailable}

`);

}
else {

    console.log("Out of Stock");
}