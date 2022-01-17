class Translation {
  chars = {
    "Вождение автомобиля": "🚔Transportation",
    "Опекун (Пожилой/ Ребенок / Родители)": "💁🏽‍♀️ Caregiver (Elderly/ Child / Parenting)",
    Мастер: "🛠 Handy Person ",
    "Бизнес / Финансы": "📈Business / Finance",
    Другое: "🤹🏼‍♂️Other",
    "Приготовление еды": "🥗 Food Prep",
    "Здравоохранение (медсестра / врач / специалист)":
      "👩🏼‍⚕️ Health care (Nurse / Doctor / Professional)",
    "Техническая (компьютерная поддержка)": "🖥Technical (Computer Support)",
    "Технический (код/веб/разработка)": "👨🏼‍💻Technical (Code / Web / Dev)",
    "Маски (n)": "😷Masks (n95)",
    Термометр: "🩸Thermometer",
    "Маски (хирургические)": "😷Masks (surgical)",
    "Запасная кровать": "🏡🛏Spare Beds",
    "Одноразовые перчатки": "🧤Disposable Gloves",
    "Тестирование сахара в крови": "🩸Blood Sugar Testing",
    "Пустое помещение (для кроватей)": "🏡Empty Space (For Beds)",
    "Аспирин / Адвил / Болеутоляющее": "💊Aspirin / Advil / Pain Relief",
    Пульсоксиметр: "🩸Pulse oximeter",
    "Домашняя машина концентратора кислорода": "💨Home Oxygen Concentrator Machine",
    Стетоскоп: "🩺Stethoscope",
    "Портативный увлажнитель": "💨Humidifier Portable",
    "Домашние запасы кислорода": "💨Home Oxygen Supplies",
    "Запасной номер (с кроватью и собственной ванной)": "🏡Spare Room (w/Bed & private Bath)",
    "Лекарства от простуды/гриппа": "💊Cold / Flu Meds",
    "Манжета для измерения артериального давления": "🩸Blood Pressure Cuff ",
    "Стерильные салфетки": "🧼Sterile Wipes",
  };
  translate(str) {
    let withoutEmoji = Translation.deleteEmoji(str);
    let translateStr = this.chars[withoutEmoji];
    return translateStr;
  }
  static deleteEmoji(str) {
    return str.replace(/[^aA-яЯ\s()/]/g, "").replace(/^\s/g, "");
  }
}
export default new Translation();
