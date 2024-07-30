var str = `[
    {
      "id": 1,
      "questionText": "کیفیت اطلاع رسانی وهماهنگی درخصوص تاریخ وزمان اجرای دوره را چطور ارزیابی می کنید؟",
      "group": "پشتیبانی و اجرا"
    },
    {
      "id": 2,
      "questionText": "نظر شما پیرامون برنامه ریزی ونظم در شروع و خاتمه دوره و طول اجرای دوره چیست؟",
      "group": "پشتیبانی و اجرا"
    },
    {
      "id": 3,
      "questionText": "مناسب بودن پاسخگویی تیم اجرایی در زمینه پشتیبانی از کاربران را چطور ارزیابی می کنید؟",
      "group": "پشتیبانی و اجرا"
    },
    {
      "id": 4,
      "questionText": "حسن خلق و رفتار تیم پشتیبانی و اجرا را چطور ارزیابی می کنید؟",
      "group": "پشتیبانی و اجرا"
    },
    {
      "id": 5,
      "questionText": "کیفیت محتوای دروس از لحاظ علمی، روانی و اثر بخشی روش تدریس چگونه بود؟",
      "group": "محتوای دوره"
    },
    {
      "id": 7,
      "questionText": "کیفیت محتوای دوره از لحاظ فنی (صدا، تصویر و پویا نمایی) چگونه بود؟",
      "group": "محتوای دوره"
    },
    {
      "id": 8,
      "questionText": "کیفیت محتوای دوره از لحاظ تناسب مقدار محتوا با مدت رسمی دوره چگونه بود؟",
      "group": "محتوای دوره"
    },
    {
      "id": 9,
      "questionText": "کیفیت محتوای دوره از لحاظ ترتیب و پیوستگی مطالب ارائه شده چگونه بود؟",
      "group": "محتوای دوره"
    },
    {
      "id": 10,
      "questionText": "تناسب محتوای ارائه شده با وظایف شغلی خود را چطور ارزیابی می کنید؟",
      "group": "محتوای دوره"
    },
    {
      "id": 11,
      "questionText": "تازگی و جذابیت عنوان و محتوای آموزشی چطور بود؟",
      "group": "محتوای دوره"
    },
    {
      "id": 12,
      "questionText": "سودمندی و کاربردی بودن محتوا را چطور ارزیابی می کنید؟",
      "group": "محتوای دوره"
    },
    {
      "id": 13,
      "questionText": "نقش محتوا در افزایش مهارتهای شغلی خود را چطور ارزیابی می کنید؟",
      "group": "محتوای دوره"
    },
    {
      "id": 14,
      "questionText": "میزان به روز بودن مطالب را چطور ارزیابی می کنید؟",
      "group": "محتوای دوره"
    },
    {
      "id": 15,
      "questionText": "تناسب سوالات آزمون دوره با مطالب عنوان شده چطور بود؟",
      "group": "متدولوژی"
    },
    {
      "id": 16,
      "questionText": "میزان یادگیری در مقایسه با دوره های حضوری را چطور ارزیابی می کنید؟",
      "group": "متدولوژی"
    },
    {
      "id": 17,
      "questionText": "روش آموزش الکترونيکي به کار رفته در اين دوره به طور کلی از ديد شما چطور بود؟",
      "group": "متدولوژی"
    },
    {
      "id": 18,
      "questionText": "تناسب مدت دوره با حجم محتوا را چطور ارزيابي مي کنيد؟",
      "group": "متدولوژی"
    },
    {
      "id": 19,
      "questionText": "کيفيت آزمون آزمایشی طول دوره و ميزان کارکرد آموزشي آن را چطور ارزيابي مي کنيد؟",
      "group": "متدولوژی"
    },
    {
      "id": 20,
      "questionText": "کیفیت برقراری ارتباط با سایت و کارکرد صحیح امکانات سایت را چطور ارزیابی می کنید؟",
      "group": "LMS"
    },
    {
      "id": 21,
      "questionText": "سهولت کاربري سایت چطور بود؟ ",
      "group": "LMS"
    },
    {
      "id": 22,
      "questionText": "سرعت بارگذاری صفحات سیستم نرم افزاری در سایت را چطور ارزیابی می کنید؟",
      "group": "LMS"
    },
    {
      "id": 23,
      "questionText": "سرعت بارگذاری صفحات و محتوا چطور بود؟ ",
      "group": "زیر ساخت"
    },
    {
      "id": 24,
      "questionText": "تناسب سرعت دسترسی شما به شبکه و حجم محتوا را چطور ارزیابی می کنید؟ ",
      "group": "زیر ساخت"
    }
  ]`
  var opt =[{txt:'عالی',value:5},{txt:'خوب',value:4},{txt:'متوسط',value:3},{txt:'ضعیف',value:2},{txt:'خیلی ضعیف',value:1},]
  var array= JSON.parse(str)
  const result = Object.entries(array.reduce((acc, { id, questionText, group }) => {
    acc[group] = (acc[group] || []);
    acc[group].push({ id, questionText});
    return acc;
  }, {})).map(([id, questionText]) => ({ name: id, children: questionText }));
  console.log(result)


var card='';
card+=`<div style="background-color: rgb(116, 224, 224);">
<form action="/action_page.php" >`
for (let i = 0; i <result.length ; i++) {


card+= ` <h2 style="color:red">${result[i].name}</h2>`;
for (let j = 0; j <result[i].children.length; j++) {
  card+=`
  <h3>${result[i].children[j].questionText}</h3>`
 for (let c = 0; c <opt.length; c++) {
 card += `
    <input type="radio"  name="fav_language_${result[i].children[j].id}" value="${opt[c].value}">
    <label for="${opt[c].txt}">${opt[c].txt}</label><br>`
}

}
}

card += ` </form></div>`
document.getElementById('loopdata').innerHTML=card;

function clickPlease(){
var input  =[];
for (let i = 0; i <result.length ; i++) {
  for (let j = 0; j <result[i].children.length; j++) {
    var obj ={
     question :result[i].children[j].id,
    option: $(`input[name='fav_language_${result[i].children[j].id}']:checked`).val() == undefined ? null : $(`input[name='fav_language_${result[i].children[j].id}']:checked`).val()
     }
      input.push(obj);
  }
}

console.log(input); 

}



  

  
