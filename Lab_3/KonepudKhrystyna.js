// ======= Завдання 1 =======
const baseActivities = [
  { id: 1, name: "Соціальна допомога малозабезпеченим", department: "Соціальний", govRelation: "Міністерство соціальної політики", usersDay1: 120, usersDay2: 98, duration: 2, unit: "місяці" },
  { id: 2, name: "Молодіжна політика та освіта", department: "Освітній", govRelation: "МОН України", usersDay1: 95, usersDay2: 103, duration: 2, unit: "місяці" },
  { id: 3, name: "Охорона здоров’я населення", department: "Медичний", govRelation: "МОЗ України", usersDay1: 230, usersDay2: 210, duration: 4, unit: "місяці" },
  { id: 4, name: "Оцифрування архівів та документів", department: "Культурний", govRelation: "Мінкульт", usersDay1: 185, usersDay2: 170, duration: 3, unit: "місяці" },
  { id: 5, name: "Екологічні ініціативи", department: "Екологічний", govRelation: "Міндовкілля", usersDay1: 112, usersDay2: 98, duration: 3, unit: "місяці" },
  { id: 6, name: "ІТ-послуги для громадян", department: "Інноваційний", govRelation: "Мінцифра", usersDay1: 250, usersDay2: 245, duration: 2, unit: "місяці" },
  { id: 7, name: "Юридичні консультації", department: "Правовий", govRelation: "Міністерство юстиції", usersDay1: 75, usersDay2: 60, duration: 4, unit: "місяці" },
  { id: 8, name: "Транспортні послуги та перевезення", department: "Логістичний", govRelation: "Мінінфраструктури", usersDay1: 100, usersDay2: 120, duration: 5, unit: "місяці" },
  { id: 9, name: "Збереження культурної спадщини", department: "Культурний", govRelation: "Мінкульт", usersDay1: 160, usersDay2: 140, duration: 3, unit: "місяці" },
  { id: 10, name: "Освітні програми для дітей", department: "Освітній", govRelation: "МОН України", usersDay1: 300, usersDay2: 275, duration: 2, unit: "місяці" }
];

// Копії масиву для пунктів 1.1–1.5
const activities1 = [...baseActivities]; // для 1.1–1.3
const activities4 = [...baseActivities]; // для 1.4 (додавання нових напрямів)

// 1.1 Впорядкування за тривалістю
activities1.sort((a, b) => a.duration - b.duration);
console.log("1.1. Відсортовано за тривалістю:", activities1);

// 1.2 Середня кількість користувачів за однаковою тривалістю
const avgUsersByDuration = {};
activities1.forEach(a => {
  const avg = (a.usersDay1 + a.usersDay2) / 2;
  if (!avgUsersByDuration[a.duration]) avgUsersByDuration[a.duration] = [];
  avgUsersByDuration[a.duration].push(avg);
});
for (let duration in avgUsersByDuration) {
  const arr = avgUsersByDuration[duration];
  const avg = arr.reduce((s, n) => s + n, 0) / arr.length;
  console.log(`1.2. Середня кількість користувачів для тривалості ${duration} ${activities1.find(a => a.duration == duration).unit}: ${avg.toFixed(2)}`);
}

// 1.3 Напрям з мінімальною кількістю користувачів за добу_2
const minActivity = activities1.reduce((min, a) => (a.usersDay2 < min.usersDay2 ? a : min));
console.log("1.3. Напрям з мінімальною кількістю користувачів:", minActivity.name, "| Відділ:", minActivity.department);

// 1.4 Додавання нових напрямів на основі копії activities4
function addActivity(newActivity, arr) {
  const requiredFields = ["id", "name", "department", "govRelation", "usersDay1", "usersDay2", "duration", "unit"];
  const hasAllInfo = requiredFields.every(field => newActivity[field] !== undefined && newActivity[field] !== null);

  if (!hasAllInfo) {
    arr.push(newActivity); // якщо не всі поля, то в кінець
  } else {
    const index = arr.findIndex(a => a.id > newActivity.id);
    if (index === -1) arr.push(newActivity);
    else arr.splice(index, 0, newActivity);
  }
}

// Нові напрями
addActivity({
  id: 5.5,
  name: "",
  department: "Тестовий",
  govRelation: "Міністерство тестів",
  usersDay1: 80,
  usersDay2: 90,
  duration: 2,
  unit: "місяці"
}, activities4);

addActivity({
  id: 6.5,
  name: "Новий напрям тест 2",
  department: "Тестовий",
  usersDay1: 50,
  usersDay2: 60,
  duration: 1,
  unit: "місяць"
}, activities4);

console.log("1.4. Масив після додавання нових напрямів:", activities4);

// 1.5 Скорочена тривалість послуг по відділах (на основі activities4)
function calcServiceDuration(servicesCount, baseDuration) {
  if (servicesCount <= 3) return baseDuration * 0.95;
  else return baseDuration * 0.6;
}

const servicesPerDepartment = {};
activities4.forEach(a => {
  if (!servicesPerDepartment[a.department]) servicesPerDepartment[a.department] = 0;
  servicesPerDepartment[a.department]++;
});

console.log("1.5. Скорочена тривалість послуг по відділах:");
for (let dept in servicesPerDepartment) {
  const count = servicesPerDepartment[dept];
  const baseDuration = activities4.find(a => a.department === dept).duration;
  const adjustedDuration = calcServiceDuration(count, baseDuration);
  console.log(`${dept} – ${count} послуг, скорочена тривалість: ${adjustedDuration.toFixed(2)} ${activities4.find(a => a.department === dept).unit}`);
}


// ======= Завдання 2 =======

// Клас користувача
class User {
  constructor(surname, name, age, education, feedbackGoal, date, time) {
    this.surname = surname;
    this.name = name;
    this.age = age;
    this.education = education;
    this.feedbackGoal = feedbackGoal;
    this.date = new Date(date);
    this.time = time;
  }

  _isFromMonth(month) {
    return this.date.getMonth() + 1 === month;
  }

  _isInTimeRange(startHour, endHour) {
    const hour = parseInt(this.time.split(":")[0]);
    return hour >= startHour && hour < endHour;
  }

  isFromMonthAndTime(month, startHour, endHour) {
    return this._isFromMonth(month) && this._isInTimeRange(startHour, endHour);
  }
}

// Масив користувачів
const users = [
  new User("Іваненко", "Марія", 25, "вища", "отримати консультацію", "2024-03-15", "10:30"),
  new User("Петренко", "Олег", 34, "вища", "залишити відгук", "2024-03-20", "18:45"),
  new User("Сидоренко", "Анна", 65, "середня", "запитати про програму", "2024-04-05", "08:50"),
  new User("Коваленко", "Ігор", 42, "вища", "повідомити проблему", "2024-03-22", "16:15"),
  new User("Гнатюк", "Ірина", 29, "вища", "зворотній зв'язок", "2024-04-02", "11:00"),
  new User("Мельник", "Тарас", 70, "середня", "подякувати", "2024-04-03", "20:15"),
  new User("Шевченко", "Катерина", 31, "вища", "запитати умови", "2024-03-10", "14:40"),
  new User("Бондар", "Юлія", 55, "вища", "скарга", "2024-03-19", "09:10"),
  new User("Романюк", "Павло", 60, "вища", "зворотній зв'язок", "2024-04-08", "19:00"),
  new User("Ткаченко", "Леся", 22, "вища", "прохання допомоги", "2024-03-11", "15:25"),
  // Тестові межові випадки
  new User("Новак", "Олександр", 30, "середня", "тест середній вік", "2024-03-12", "09:00"),
  new User("Дорошенко", "Світлана", 60, "вища", "тест верхня межа середнього віку", "2024-03-12", "16:59"),
  new User("Кравченко", "Ірина", 65, "вища", "тест похилий вік", "2024-03-12", "08:00")
];

// 2.1 Користувачі за березень у робочий час
const monthToCheck = 3;
const startHour = 9;
const endHour = 17;
const usersInMarchWorkingHours = users.filter(u => u.isFromMonthAndTime(monthToCheck, startHour, endHour));
console.log(`2.1. Користувачі за березень у робочий час (${startHour}:00-${endHour}:00):`, usersInMarchWorkingHours);

// 2.2 Середній вік користувачів
const avgAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;
console.log("2.2. Середній вік користувачів:", avgAge.toFixed(0));

// 2.3 Поділ користувачів на класи
let middleWorking = 0, oldNonWorking = 0, others = 0;
users.forEach(u => {
  const hour = parseInt(u.time.split(":")[0]);
  if (u.age >= 30 && u.age <= 60 && hour >= 9 && hour < 17) middleWorking++;
  else if (u.age > 60 && (hour < 9 || hour >= 17)) oldNonWorking++;
  else others++;
});
console.log("2.3. Кількість середніх за віком (робочий час):", middleWorking);
console.log("2.3. Кількість похилого віку (неробочий час):", oldNonWorking);
console.log("2.3. Кількість інших:", others);

// 2.4 Сортування користувачів за алфавітом із виведенням мети
users.sort((a, b) => a.surname.localeCompare(b.surname));
console.log("2.4. Сортування за алфавітом:");
users.forEach(u => console.log(`${u.surname} ${u.name} -- ${u.feedbackGoal}`));
