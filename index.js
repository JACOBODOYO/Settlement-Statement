function calculateBalance() {
    loanAmountValue = document.getElementById("loan-amount").value;

    durationToDate = document.getElementById("duration").value;

    TermToDate = document.getElementById("term").value;

    repayment = document.getElementById("total-payments").value;

    // totalRepayment = document.getElementById("total-payments").value;


    interestToDate = (loanAmountValue * 0.0375 * durationToDate);

    document.getElementById("interest").value= interestToDate;

    admin = (durationToDate *170 + 3000);


    document.getElementById("admin-fee").value = admin;

    InsuranceFee = (TermToDate* 90);

    document.getElementById("insurance-fee").value = InsuranceFee;

    totalPayment = (loanAmountValue + interestToDate + admin + InsuranceFee);

    document.getElementById("sub-total").value = totalPayment;

    currentBalance = (totalPayment - repayment);

    document.getElementById("current-balance").value = currentBalance;


}