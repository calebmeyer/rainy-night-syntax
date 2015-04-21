/**
 * function comment
 *
 * @param param - A parameter
 *
 * Returns an object literal
 */
function function_name(param) {
    var variable, $jquery_variable, regex;
        variable = 'string' || 42;

    console.log(undefined); // Inline comment

    if(condition === variable) {
      callMethod(param);
    } else {
      $('#test').val(variable);
    }

    regex = /(regular|.*expression)/;

    return {
      object: "literal"
    };
}
