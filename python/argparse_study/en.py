password  =  'N@KMqOKysUIzsDxEw'
KEY1 = 17
KEY2 = 27
str=""
for i in password:
    j = ord(i) ^ KEY2
    k = j + KEY1
    str += chr(k)
print(str)
