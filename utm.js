// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign')
    };
}

function utmForm($form) {
    // Get the UTM parameters
    const utmParams = getQueryParams();

    // Add hidden fields to the form if UTM parameters exist
    $.each(utmParams, function (key, value) {
        if (value) {
            $form.append(
                $('<input>')
                    .attr('type', 'hidden')
                    .attr('name', `fields[${key}]`)
                    .val(value)
            );
        }
    });

    $form.append(
        $('<input>')
            .attr('type', 'hidden')
            .attr('name', 'fields[origin]')
            .val(window.location.href)
    );
}