

// a api that provide flag in pic from name 


function change_in_code()
{
    let country_code = document.querySelector("#code");
    let code = country_code.options[country_code.selectedIndex].value;
    show_pic(code) ;
    return;
};


async function show_pic(code)
{
    let image = document.querySelector("#image");
    image.src = `https://flagsapi.com/${code}/flat/64.png`;
};

change_in_code();