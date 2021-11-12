<?php

class fooClass {
  function do_foo() {
    echo "Hello, world";
  }
}

$fooNull = NULL;
$fooFalse = FALSE;
$fooTrue = TRUE;
$fooFalseyString = "";
$fooTruthyString = "hello";
$fooFalseyArray = [];
$fooTruthyArray = ["hello", "everyone"];
$fooFalseyNumber = 0;
$fooTruthyNumber = 5;
$fooTruthyObject = new fooClass;
$fooFalseyObject = (object) array();
$fooNegativeNumber = -2;
$fooNegativeZero = -0;

echo "PHP Version: " . phpversion() . "\n";
echo "\"Uh oh!\" added after every logically unexpected result.\n\n";

// NULL {{{

if ($fooNull) {
  echo "Default if evaluates null to true // Uh oh! \n";
} else {
  echo "Default if evaluates null to false\n";
}

if (isset($fooNull)) {
  echo "isset() if evaluates null to true\n";
} else {
  echo "isset() if evaluates null to false // Uh oh! \n";
}

if (empty($fooNull)) {
  echo "empty() if evaluates null to true\n";
} else {
  echo "empty() if evaluates null to false // Uh oh! \n";
}

echo "\n";

// }}}

// Unset variable {{{

if ($fooUnset) {
  echo "Default if evaluates an unset variable to true // Uh oh! \n";
} else {
  echo "Default if evaluates unset variable to false\n";
}

if (isset($fooUnset)) {
  echo "isset() if evaluates an unset variable to true // Uh oh! \n";
} else {
  echo "isset() if evaluates unset variable to false\n";
}

if (empty($fooUnset)) {
  echo "empty() if evaluates an unset variable to true\n";
} else {
  echo "empty() if evaluates unset variable to false // Uh oh! \n";
}

echo "\n";

// }}}

// FALSE {{{

if ($fooFalse) {
  echo "Default if evaluates false to true // Uh oh! \n";
} else {
  echo "Default if evaluates false to false\n";
}

if (isset($fooFalse)) {
  echo "isset() if evaluates false to true\n";
} else {
  echo "isset() if evaluates false to false // Uh oh! \n";
}

if (empty($fooFalse)) {
  echo "empty() if evaluates false to true\n";
} else {
  echo "empty() if evaluates false to false // Uh oh! \n";
}

echo "\n";

// }}}

// TRUE {{{

if ($fooTrue) {
  echo "Default if evaluates true to true\n";
} else {
  echo "Default if evaluates true to false\n";
}

if (isset($fooTrue)) {
  echo "isset() if evaluates true to true\n";
} else {
  echo "isset() if evaluates true to false // Uh oh! \n";
}

if (empty($fooTrue)) {
  echo "empty() if evaluates true to true // Uh oh! \n";
} else {
  echo "empty() if evaluates true to false\n";
}

echo "\n";

// }}}

// Falsey string {{{

if ($fooFalseyString) {
  echo "Default if evaluates a falsey string to true // Uh oh! \n";
} else {
  echo "Default if evaluates a falsey string to false\n";
}

if (isset($fooFalseyString)) {
  echo "isset() if evaluates a falsey string to true // Uh oh! \n";
} else {
  echo "isset() if evaluates a falsey string to false\n";
}

if (empty($fooFalseyString)) {
  echo "empty() if evaluates a falsey string to true\n";
} else {
  echo "empty() if evaluates a falsey string to false // Uh oh! \n";
}

echo "\n";

// }}}

// Truthy string {{{

if ($fooTruthyString) {
  echo "Default if evaluates a truthy string to true\n";
} else {
  echo "Default if evaluates a truthy string to false // Uh oh! \n";
}

if (isset($fooTruthyString)) {
  echo "isset() if evaluates a truthy string to true\n";
} else {
  echo "isset() if evaluates a truthy string to false // Uh oh! \n";
}

if (empty($fooTruthyString)) {
  echo "empty() if evaluates a truthy string to true // Uh oh! \n";
} else {
  echo "empty() if evaluates a truthy string to false\n";
}

echo "\n";

// }}}

// Falsey array {{{

if ($fooFalseyArray) {
  echo "Default if evaluates a falsey array to true // Uh oh! \n";
} else {
  echo "Default if evaluates a falsey array to false\n";
}

if (isset($fooFalseyArray)) {
  echo "isset() if evaluates a falsey array to true // Uh oh! \n";
} else {
  echo "isset() if evaluates a falsey array to false\n";
}

if (empty($fooFalseyArray)) {
  echo "empty() if evaluates a falsey array to true\n";
} else {
  echo "empty() if evaluates a falsey array to false // Uh oh! \n";
}

echo "\n";

// }}}

// Truthy array {{{

if ($fooTruthyArray) {
  echo "Default if evaluates a Truthy array to true\n";
} else {
  echo "Default if evaluates a Truthy array to false // Uh oh! \n";
}

if (isset($fooTruthyArray)) {
  echo "isset() if evaluates a Truthy array to true\n";
} else {
  echo "isset() if evaluates a Truthy array to false // Uh oh! \n";
}

if (empty($fooTruthyArray)) {
  echo "empty() if evaluates a Truthy array to true // Uh oh! \n";
} else {
  echo "empty() if evaluates a Truthy array to false\n";
}

echo "\n";

// }}}

// Falsey number {{{

if ($fooFalseyNumber) {
  echo "Default if evaluates a Falsey number to true // Uh oh! \n";
} else {
  echo "Default if evaluates a Falsey number to false\n";
}

if (isset($fooFalseyNumber)) {
  echo "isset() if evaluates a Falsey number to true // Uh oh! \n";
} else {
  echo "isset() if evaluates a Falsey number to false\n";
}

if (empty($fooFalseyNumber)) {
  echo "empty() if evaluates a Falsey number to true\n";
} else {
  echo "empty() if evaluates a Falsey number to false // Uh oh! \n";
}

echo "\n";

// }}}

// Truthy number {{{

if ($fooTruthyNumber) {
  echo "Default if evaluates a Truthy number to true\n";
} else {
  echo "Default if evaluates a Truthy number to false // Uh oh! \n";
}

if (isset($fooTruthyNumber)) {
  echo "isset() if evaluates a Truthy number to true\n";
} else {
  echo "isset() if evaluates a Truthy number to false // Uh oh! \n";
}

if (empty($fooTruthyNumber)) {
  echo "empty() if evaluates a Truthy number to true // Uh oh! \n";
} else {
  echo "empty() if evaluates a Truthy number to false\n";
}

echo "\n";

// }}}

// Truthy object {{{

if ($fooTruthyObject) {
  echo "Default if evaluates a Truthy object to true\n";
} else {
  echo "Default if evaluates a Truthy object to false // Uh oh! \n";
}

if (isset($fooTruthyObject)) {
  echo "isset() if evaluates a Truthy object to true\n";
} else {
  echo "isset() if evaluates a Truthy object to false // Uh oh! \n";
}

if (empty($fooTruthyObject)) {
  echo "empty() if evaluates a Truthy object to true // Uh oh! \n";
} else {
  echo "empty() if evaluates a Truthy object to false\n";
}

echo "\n";

// }}}

// Falsey object {{{

if ($fooFalseyObject) {
  echo "Default if evaluates a Falsey object to true // Uh oh! \n";
} else {
  echo "Default if evaluates a Falsey object to false\n";
}

if (isset($fooFalseyObject)) {
  echo "isset() if evaluates a Falsey object to true // Uh oh! \n";
} else {
  echo "isset() if evaluates a Falsey object to false\n";
}

if (empty($fooFalseyObject)) {
  echo "empty() if evaluates a Falsey object to true\n";
} else {
  echo "empty() if evaluates a Falsey object to false // Uh oh! \n";
}

echo "\n";

// }}}

// Negative number {{{

if ($fooNegativeNumber) {
  echo "Default if evaluates a Negative number to true\n";
} else {
  echo "Default if evaluates a Negative number to false // Uh oh! \n";
}

if (isset($fooNegativeNumber)) {
  echo "isset() if evaluates a Negative number to true\n";
} else {
  echo "isset() if evaluates a Negative number to false // Uh oh! \n";
}

if (empty($fooNegativeNumber)) {
  echo "empty() if evaluates a Negative number to true // Uh oh! \n";
} else {
  echo "empty() if evaluates a Negative number to false\n";
}

echo "\n";

// }}}

// Negative Zero {{{

if ($fooNegativeZero) {
  echo "Default if evaluates a Negative Zero to true // Uh oh! \n";
} else {
  echo "Default if evaluates a Negative Zero to false\n";
}

if (isset($fooNegativeZero)) {
  echo "isset() if evaluates a Negative Zero to true // Uh oh! \n";
} else {
  echo "isset() if evaluates a Negative Zero to false\n";
}

if (empty($fooNegativeZero)) {
  echo "empty() if evaluates a Negative Zero to true\n";
} else {
  echo "empty() if evaluates a Negative Zero to false // Uh oh! \n";
}

echo "\n";

// }}}

/* vim: set foldmethod=marker */
