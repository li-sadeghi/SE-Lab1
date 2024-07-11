# آزمایش اول درس آزمایشگاه مهندسی نرم افزار

## جدول محتواها
- [درباره پروژه](#About)
- [توسعه دهندگان](#Developers)

## درباره پروژه:

## توسعه دهندگان:
- [علی صادقی](a.sadeghiali@yahoo.com)
- [بزرگمهر ضیا](bozorgmehr1381@gmail.com)
- [زهرا رحمانی](Zahra.rahmaniez@gmail.com)

## گزارش آزمایش:
  
### جزییات پیاده سازی
در شکل زیر ساختار کلی پروژه را مشاهده می‌کنید که دو branch اصلی دارد: `master` که فرایند اسقرار محصول روی آن انجام می‌شود و `develop` که تغییرات را ابتدا روی آن مرج و تست شده و سپس با pull-request روی master مرج شده و فرایند استقرار بصورت خودکار انجام می‌شود. بقیه branch ها هم با فرمت `feature/[FEATURE_NAME]` برای افزودن ویژگی جدید و یا `fix/[FIX_TYPE]` برای حل مشکلی از یک ویژگی در نظر گرفته شده است.
![9](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/80b8ee7b-7d32-4a15-9536-0dd260cb0fcc)
همچنین فایل `gitignore.` برای جلوگیری از push شدن فایلها و فولدرهای local در نظر گرفته شده است:
![8](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/3ee1c83d-54bf-4fb4-9bbc-42af9bb1576b)
برای حالت conflict زمان مرج شاخه fix/fix-gitignore به develop پیش آمد که با استفاده از viewer خود github آن را resolve کردیم. دلیل این کانفلیکت این بود که روی برنچ develop قبلا فایل gitignore تغییر کرده بود:
![2](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/0287cf08-1fb4-4dde-ae20-bc92b8690645)
اما در برنچ گرفته شده نیز تغییر کرده بود و به کانفلیکت خورده بودند:
![5](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/38626c0b-affc-40ac-8345-9ac3598a30b6)
در تصویر زیر نیز resolve آن را مشاهده می کنید:
![6](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/ed10d65e-dfd6-4de8-88ff-4452f6cca4c4)
و در نهایت نیز مرج enable شد:
![7](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/4f04936b-0681-4920-ae7a-d8ec35ca05c5)

در شکل های زیر چند نمونه از دستورات استفاده شده نشان داده شده اند:
![4](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/0c67a06b-03e0-4afb-9137-0c7466be35d0)
![3](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/0e29e743-10f2-4cc4-aa60-beff61270c8c)

همچنین برای محافظت از شاخه master یک rule را اضافه کردیم تا هیچ کس حتی administrator نتواند مستقیما به آن پوش کند. برای آن گزینه‌های Require a pull request before merging و Do not allow bypassing the above settings را فعال کردیم.
![image](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/c022a974-6c18-4c60-8494-6bdf108f2e79)
![image](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/498b1223-fccd-4b44-8606-c743401e0d91)
![image](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/4be44ac2-3bd7-41e4-8d65-974425c4323a)
بعد از آن نتوانستیم مستقیما به master پوش کنیم:
![1](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/8f5dbb39-4a02-4159-b790-d388cab87536)
برای افزودن قابلیت به master و develop از pull request استفاده کردیم و بعد از review و approve آن را مرج کردیم.
![image](https://github.com/li-sadeghi/SE-Lab1/assets/79265024/00306a78-b2be-4e96-9f5e-9d760602ebdb)














