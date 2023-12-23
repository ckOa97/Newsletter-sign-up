const urlParams = new URLSearchParams(location.search);
let queryString = [];

for (const [key, value] of urlParams) {
    queryString.push({[key]: value});
};

document.querySelector('main p').innerHTML = `A confirmation email has been sent to 
                                                <b>${queryString[0].email}</b>. 
                                                Please open it and click the button 
                                                inside to confirm your subscription.`