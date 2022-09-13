import argparse
parser = argparse.ArgumentParser()
parser.description='please enter two parameters a and b ...'
parser.add_argument("-a", "--inputA", help="this is parameter a", dest="argA", type=int, default="0")
parser.add_argument("-b", "--inputB", help="this is parameter b",  type=int, default="1")
args = parser.parse_args()

print("parameter a is :",args.argA)
print("parameter b is :",args.inputB)
# ————————————————
# 版权声明：本文为CSDN博主「囊萤映雪的萤」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
# 原文链接：https://blog.csdn.net/liuyingying0418/article/details/100126348