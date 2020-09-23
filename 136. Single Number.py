# Given a non-empty array of integers, every element appears twice except for one. Find that single one.

# Note:

# Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

# Example 1:

# Input: [2,2,1]
# Output: 1
# Example 2:

# Input: [4,1,2,1,2]
# Output: 4

def singleNumber(nums):
  return reduce(lambda a, b: a ^ b, nums)

test1 = [2,2,1]
test2 = [4,1,2,1,2]
print(singleNumber(test1))
print(singleNumber(test2))