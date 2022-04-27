var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage = documentById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
    var pack = this.options[this.selectedIndex].value;
    if (pack === ',monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    } else {
        alPackageHint.innerHTML = 'Wise choice!';
    }
}
function checkTerms(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = 'You must agree to the terms. ';
    }
}
alForm.addEventListener('submit', checkTerms, false);
alSelectPackage.addEventListener('change', packageHint, false);