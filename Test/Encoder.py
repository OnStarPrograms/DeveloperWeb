import hashlib
f = open('C:\\Users\\aiden\\Desktop\\CodingWIPs\\DevWebsite\\Downloads\\MailAutomater.zip', "rb")
TheInput = str(f.read())
# print(sha256(input_.encode('utf-8')).hexdigest())
result = hashlib.sha256(TheInput.encode())