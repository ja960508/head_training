function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function getLonggerList(l1, l2) {
  let count0 = 0;
  let count1 = 0;
  let l1Pointer = l1;
  let l2Pointer = l2;

  while (l1Pointer) {
    count0++;
    l1Pointer = l1Pointer.next;
  }

  while (l2Pointer) {
    count1++;
    l2Pointer = l2Pointer.next;
  }

  if (count0 > count1) {
    return l1;
  } else {
    return l2;
  }
}

function addTwoNumbers(l1, l2) {
  let longgerPointer = getLonggerList(l1, l2);
  let shorterPointer = longgerPointer === l1 ? l2 : l1;

  while (longgerPointer) {
    if (shorterPointer) {
      longgerPointer.val += shorterPointer.val;
      if (longgerPointer.val >= 10) {
        longgerPointer.val -= 10;

        if (!longgerPointer.next) {
          longgerPointer.next = new ListNode(0);
        }

        longgerPointer.next.val += 1;
      }

      longgerPointer = longgerPointer.next;
      shorterPointer = shorterPointer.next;
    } else break;
  }

  let answer = getLonggerList(l1, l2);

  return answer;
}

addTwoNumbers(l1, l2);
