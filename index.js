// Your code here
function mapToNegativize(nums) {
  return nums.map(function (num) {
    return num * -1;
  });
}

function mapToNoChange(names) {
  return names.map(function (name) {
    return name;
  });
}

function mapToDouble(nums) {
  return nums.map(function (num) {
    return num * 2;
  });
}

function mapToSquare(nums) {
  return nums.map(function (num) {
    return num * num;
  });
}

function reduceToTotal(nums, start = 0) {
  return nums.reduce(function (start, num) {
    return start + num;
  }, start);
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce(function (accumulator, value) {
    return accumulator && !!value;
  }, true);
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce(function (accumulator, value) {
    return accumulator || !!value;
  }, false);
}
