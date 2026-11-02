"use strict";

const answerKey = "ABABBBDABBBCACB".split("");

const rawQuestions = [
  {
    id: 1,
    text: "Khối lượng riêng của một chất được xác định bằng",
    options: [
      ["A", "khối lượng của một đơn vị thể tích chất đó."],
      ["B", "thể tích của một đơn vị khối lượng chất đó."],
      ["C", "khối lượng của vật chia cho diện tích bề mặt của vật."],
      ["D", "thể tích của vật chia cho khối lượng của vật."]
    ]
  },
  {
    id: 2,
    text: "Áp suất là đại lượng được xác định bằng",
    options: [
      ["A", "độ lớn của lực tác dụng lên vật."],
      ["B", "độ lớn của áp lực trên một đơn vị diện tích bề mặt bị ép."],
      ["C", "diện tích bề mặt tiếp xúc giữa hai vật."],
      ["D", "khối lượng của vật trên một đơn vị diện tích tiếp xúc."]
    ]
  },
  {
    id: 3,
    text: "Áp suất do một vật tác dụng lên bề mặt tiếp xúc phụ thuộc vào những yếu tố nào?",
    options: [
      ["A", "Độ lớn của áp lực và diện tích bề mặt tiếp xúc."],
      ["B", "Khối lượng của vật và thể tích của vật."],
      ["C", "Độ lớn của áp lực và thể tích của vật."],
      ["D", "Khối lượng của vật và độ cao của vật so với mặt đất."]
    ]
  },
  {
    id: 4,
    text: "Một vật được nhúng hoàn toàn trong nước. Biết trọng lượng của vật nhỏ hơn lực đẩy Archimedes tác dụng lên vật. Khi được thả ra, vật sẽ",
    options: [
      ["A", "chìm xuống đáy bình."],
      ["B", "nổi lên trên mặt nước."],
      ["C", "đứng yên tại vị trí được thả."],
      ["D", "chuyển động xuống dưới rồi đứng yên."]
    ]
  },
  {
    id: 5,
    text: "Một vật được nhúng hoàn toàn trong nước. Biết trọng lượng của vật lớn hơn lực đẩy Archimedes tác dụng lên vật. Khi thả vật ra, hiện tượng nào sau đây xảy ra?",
    options: [
      ["A", "Vật nổi lên mặt nước."],
      ["B", "Vật chìm xuống dưới."],
      ["C", "Vật lơ lửng trong nước."],
      ["D", "Vật chuyển động lên trên rồi đứng yên ở giữa nước."]
    ]
  },
  {
    id: 6,
    text: "Khi ta tiếp tục hút bớt không khí trong hộp sữa sau khi đã uống hết, ta thấy hộp sữa bị móp vào theo nhiều phía. Hiện tượng này cho thấy điều gì?",
    options: [
      ["A", "Áp suất khí quyển chỉ tác dụng theo phương thẳng đứng từ trên xuống."],
      ["B", "Áp suất khí quyển tác dụng theo mọi phương lên hộp sữa."],
      ["C", "Không khí bên trong hộp sữa có áp suất lớn hơn áp suất khí quyển."],
      ["D", "Lực hút của miệng làm hộp sữa bị móp vào."]
    ]
  },
  {
    id: 7,
    text: "Khi ta dùng tay bịt kín đầu trên của một ống hút chứa nước ở trong thì nước không chảy ra được cho dù ta nghiêng ống hút theo nhiều phương khác nhau. Hiện tượng này cho thấy điều gì?",
    options: [
      ["A", "Áp suất khí quyển chỉ tác dụng theo phương thẳng đứng từ trên xuống."],
      ["B", "Áp suất khí quyển chỉ tác dụng theo phương thẳng đứng từ dưới lên."],
      ["C", "Không khí bên trong ống hút có áp suất lớn hơn áp suất khí quyển."],
      ["D", "Áp suất khí quyển tác dụng theo mọi phương."]
    ]
  },
  {
    id: 8,
    text: "Khi vặn một con ốc bằng cờ lê, người ta thường tác dụng lực ở đầu cờ lê xa trục quay của con ốc. Giải thích nào sau đây là đúng?",
    options: [
      ["A", "Vì giá của lực tác dụng ở xa trục quay làm tăng moment lực, giúp vặn ốc dễ dàng hơn."],
      ["B", "Vì giá của lực tác dụng ở xa trục quay làm giảm moment lực, giúp vặn ốc dễ dàng hơn."],
      ["C", "Vì giá của lực tác dụng ở xa trục quay làm giảm khối lượng của con ốc."],
      ["D", "Vì giá của lực tác dụng ở xa trục quay làm giảm lực ma sát giữa con ốc và vật được ghép."]
    ]
  },
  {
    id: 9,
    text: "Khi dùng cờ lê để vặn một con ốc, người ta thường chọn cờ lê có cán dài hơn. Vì sao?",
    options: [
      ["A", "Vì cán dài làm giảm lực ma sát giữa con ốc và vật được ghép."],
      ["B", "Vì cán dài làm tăng cánh tay đòn, giúp tăng mômen lực khi tác dụng cùng một lực vuông góc với cán."],
      ["C", "Vì cán dài làm giảm khối lượng của con ốc."],
      ["D", "Vì cán dài làm giảm trọng lượng của con ốc."]
    ]
  },
  {
    id: 10,
    text: "Khi muốn uốn một thanh kim loại thành hình chữ U, người thợ thường tác dụng lực vào thanh kim loại tại vị trí cách xa điểm tựa hoặc vị trí giữ thanh. Cách làm này có tác dụng gì?",
    options: [
      ["A", "Làm giảm tác dụng làm quay của lực lên thanh kim loại."],
      ["B", "Làm tăng tác dụng làm quay của lực, giúp uốn thanh kim loại dễ dàng hơn."],
      ["C", "Làm giảm độ biến dạng của thanh kim loại."],
      ["D", "Làm cho thanh kim loại không chịu tác dụng của lực."]
    ]
  },
  {
    id: 11,
    text: "Trong đời sống, dao thường được mài sắc để cắt, thái thực phẩm dễ dàng hơn. Giải thích nào sau đây là đúng?",
    options: [
      ["A", "Mài dao làm tăng diện tích tiếp xúc, từ đó làm tăng áp suất lên thực phẩm."],
      ["B", "Mài dao làm giảm diện tích tiếp xúc, từ đó làm tăng áp suất lên thực phẩm khi tác dụng cùng một lực."],
      ["C", "Mài dao làm giảm lực tác dụng lên thực phẩm, từ đó làm tăng áp suất."],
      ["D", "Mài dao làm tăng diện tích tiếp xúc, từ đó làm giảm áp suất lên thực phẩm."]
    ]
  },
  {
    id: 12,
    text: "Một người thợ lặn không thể lặn xuống nước ở độ sâu tùy ý mà chỉ có thể lặn đến một độ sâu nhất định. Nguyên nhân chủ yếu là gì?",
    options: [
      ["A", "Nhiệt độ nước luôn tăng theo độ sâu, gây nguy hiểm cho người thợ lặn."],
      ["B", "Áp suất của nước giảm khi độ sâu tăng, khiến người thợ lặn khó thở."],
      ["C", "Áp suất của nước tăng theo độ sâu, có thể gây nguy hiểm cho cơ thể người thợ lặn."],
      ["D", "Lực đẩy Archimedes giảm dần khi người thợ lặn xuống sâu hơn."]
    ]
  },
  {
    id: 13,
    text: "Một người muốn đóng đinh vào tấm gỗ dễ dàng hơn. Cách làm nào sau đây phù hợp nhất với kiến thức về áp suất?",
    options: [
      ["A", "Dùng chiếc đinh có đầu nhọn hơn và tác dụng lực đóng đinh thích hợp."],
      ["B", "Dùng chiếc đinh có đầu tù hơn và giữ nguyên lực đóng."],
      ["C", "Tăng diện tích tiếp xúc giữa đầu nhọn của đinh và gỗ."],
      ["D", "Giảm lực đóng đinh để làm tăng áp suất lên gỗ."]
    ]
  },
  {
    id: 14,
    text: "Tác dụng nào sau đây là tác dụng của đòn bẩy?",
    options: [
      ["A", "Làm tăng khối lượng của vật."],
      ["B", "Làm giảm trọng lượng của vật."],
      ["C", "Giúp làm thay đổi hướng của lực hoặc giúp ta được lợi về lực."],
      ["D", "Luôn làm giảm quãng đường dịch chuyển của vật."]
    ]
  },
  {
    id: 15,
    text: "Khi sử dụng đòn bẩy để nâng một vật, trong trường hợp nào người sử dụng có thể được lợi về lực?",
    options: [
      ["A", "Cánh tay đòn của lực tác dụng nhỏ hơn cánh tay đòn của trọng lực."],
      ["B", "Cánh tay đòn của lực tác dụng lớn hơn cánh tay đòn của trọng lực."],
      ["C", "Hai cánh tay đòn luôn bằng nhau."],
      ["D", "Điểm đặt lực tác dụng trùng với điểm tựa."]
    ]
  }
];

const questions = rawQuestions.map((question, index) => ({
  ...question,
  answer: answerKey[index]
}));

const trueFalseStatements = [
  { key: "a", text: "Cái kéo là một ví dụ về đòn bẩy trong thực tiễn.", answer: "Đ" },
  { key: "b", text: "Cái kẹp hạt dẻ là một ví dụ về đòn bẩy.", answer: "Đ" },
  { key: "c", text: "Khi cánh cửa mở ra hoặc đóng lại quanh bản lề, cánh cửa đã thực hiện chuyển động tịnh tiến.", answer: "S" },
  { key: "d", text: "N/m² là một đơn vị đo áp suất.", answer: "Đ" },
  { key: "e", text: "Paxcan (Pa) là đơn vị đo áp suất.", answer: "Đ" },
  { key: "f", text: "Khối lượng riêng của một chất phụ thuộc vào khối lượng và thể tích của mẫu chất được lấy để đo.", answer: "S" },
  { key: "g", text: "Có thể xác định khối lượng riêng của một vật bằng cách đo khối lượng và thể tích của vật đó.", answer: "Đ" },
  { key: "h", text: "Hai vật có cùng khối lượng thì chắc chắn có cùng khối lượng riêng.", answer: "S" },
  { key: "i", text: "Khi nhúng một quả bóng nhựa vào nước, ta cảm thấy quả bóng có xu hướng nổi lên trên. Đây là biểu hiện của lực đẩy Archimedes do nước tác dụng lên quả bóng.", answer: "Đ" },
  { key: "j", text: "Khi thả một miếng gỗ vào chậu nước, miếng gỗ nổi trên mặt nước. Hiện tượng này là ví dụ về sự tồn tại của lực đẩy Archimedes.", answer: "Đ" },
  { key: "k", text: "Khi cánh quạt điện đang quay, cánh quạt chuyển động tịnh tiến theo một đường thẳng.", answer: "S" }
];

const letters = ["A", "B", "C", "D"];
const questionList = document.getElementById("questionList");
const trueFalseList = document.getElementById("trueFalseList");
const quizForm = document.getElementById("quizForm");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const resultPanel = document.getElementById("resultPanel");

let submitted = false;
let displayedQuestions = [];

function shuffle(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderQuiz() {
  submitted = false;
  displayedQuestions = shuffle(questions).map(question => ({
    ...question,
    shuffledOptions: shuffle(question.options)
  }));

  questionList.innerHTML = displayedQuestions.map(question => {
    const optionsHTML = question.shuffledOptions.map((option, index) => `
      <label class="option" data-option-id="${option[0]}">
        <input type="radio" name="question-${question.id}" value="${option[0]}" aria-label="Câu ${question.id}, đáp án ${letters[index]}">
        <span class="option-letter">${letters[index]}</span>
        <span class="option-text">${escapeHTML(option[1])}</span>
      </label>
    `).join("");

    return `
      <article class="question-card" id="question-${question.id}">
        <div class="question-top">
          <span class="number">${String(question.id).padStart(2, "0")}</span>
          <h3 class="question-text">${escapeHTML(question.text)}</h3>
        </div>
        <div class="options">${optionsHTML}</div>
        <div class="feedback" id="feedback-${question.id}" aria-live="polite"></div>
      </article>
    `;
  }).join("");

  // Phần II giữ cố định thứ tự a–k, không xáo trộn các phát biểu.
  trueFalseList.innerHTML = trueFalseStatements.map(statement => `
    <article class="tf-card" id="tf-card-${statement.key}">
      <div class="tf-statement">
        <span class="tf-key">${statement.key})</span>
        <span>${escapeHTML(statement.text)}</span>
      </div>
      <div class="tf-choices" role="group" aria-label="Ý ${statement.key}">
        <label class="tf-choice" data-choice="Đ">
          <input type="radio" name="tf-${statement.key}" value="Đ" aria-label="Ý ${statement.key}, Đúng">
          <span class="tf-mark">Đ</span><span>Đúng</span>
        </label>
        <label class="tf-choice" data-choice="S">
          <input type="radio" name="tf-${statement.key}" value="S" aria-label="Ý ${statement.key}, Sai">
          <span class="tf-mark">S</span><span>Sai</span>
        </label>
      </div>
      <div class="feedback" id="tf-feedback-${statement.key}" aria-live="polite"></div>
    </article>
  `).join("");

  quizForm.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener("change", updateProgress);
  });

  resultPanel.classList.remove("show");
  submitButton.disabled = false;
  submitButton.textContent = "Nộp bài";
  updateProgress();
}

function updateProgress() {
  const mcAnswered = questions.filter(question =>
    document.querySelector(`input[name="question-${question.id}"]:checked`)
  ).length;
  const tfAnswered = trueFalseStatements.filter(statement =>
    document.querySelector(`input[name="tf-${statement.key}"]:checked`)
  ).length;
  const answered = mcAnswered + tfAnswered;
  progressText.textContent = `Đã trả lời ${answered}/26 ý`;
  progressFill.style.width = `${(answered / 26) * 100}%`;
}

function getDisplayedLetter(question, optionId) {
  const optionIndex = question.shuffledOptions.findIndex(option => option[0] === optionId);
  return optionIndex >= 0 ? letters[optionIndex] : "?";
}

function formatScore(value) {
  return value.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
}

function submitQuiz(event) {
  event.preventDefault();
  if (submitted) return;

  let mcCorrect = 0;
  let mcWrong = 0;
  let mcEmpty = 0;
  let tfCorrect = 0;
  let tfWrong = 0;
  let tfEmpty = 0;

  displayedQuestions.forEach(question => {
    const card = document.getElementById(`question-${question.id}`);
    const selectedInput = document.querySelector(`input[name="question-${question.id}"]:checked`);
    const selectedId = selectedInput ? selectedInput.value : null;
    const correctId = question.answer;
    const correctLetter = getDisplayedLetter(question, correctId);
    const correctOption = question.options.find(option => option[0] === correctId);
    const feedback = document.getElementById(`feedback-${question.id}`);

    card.querySelectorAll("input").forEach(input => { input.disabled = true; });
    card.querySelectorAll(".option").forEach(label => {
      if (label.dataset.optionId === correctId) label.classList.add("answer-correct");
      if (selectedId && label.dataset.optionId === selectedId && selectedId !== correctId) {
        label.classList.add("answer-wrong");
      }
    });

    if (selectedId === correctId) {
      mcCorrect++;
      card.classList.add("correct-card");
      feedback.className = "feedback show good";
      feedback.textContent = `Chính xác! Đáp án đúng: ${correctLetter}. ${correctOption[1]}`;
    } else if (selectedId) {
      mcWrong++;
      const selectedLetter = getDisplayedLetter(question, selectedId);
      const selectedOption = question.options.find(option => option[0] === selectedId);
      card.classList.add("wrong-card");
      feedback.className = "feedback show bad";
      feedback.textContent = `Bạn chọn: ${selectedLetter}. ${selectedOption[1]} | Đáp án đúng: ${correctLetter}. ${correctOption[1]}`;
    } else {
      mcEmpty++;
      card.classList.add("wrong-card");
      feedback.className = "feedback show empty";
      feedback.textContent = `Bạn chưa trả lời. Đáp án đúng: ${correctLetter}. ${correctOption[1]}`;
    }
  });

  trueFalseStatements.forEach(statement => {
    const card = document.getElementById(`tf-card-${statement.key}`);
    const selectedInput = document.querySelector(`input[name="tf-${statement.key}"]:checked`);
    const selected = selectedInput ? selectedInput.value : null;
    const correct = statement.answer;
    const feedback = document.getElementById(`tf-feedback-${statement.key}`);

    card.querySelectorAll("input").forEach(input => { input.disabled = true; });
    card.querySelectorAll(".tf-choice").forEach(label => {
      if (label.dataset.choice === correct) label.classList.add("correct-choice");
      if (selected && label.dataset.choice === selected && selected !== correct) label.classList.add("wrong-choice");
    });

    const correctText = correct === "Đ" ? "Đúng" : "Sai";
    if (selected === correct) {
      tfCorrect++;
      card.classList.add("correct-card");
      feedback.className = "feedback show good";
      feedback.textContent = `Chính xác. Đáp án: ${correctText}.`;
    } else if (selected) {
      tfWrong++;
      card.classList.add("wrong-card");
      feedback.className = "feedback show bad";
      feedback.textContent = `Bạn chọn: ${selected === "Đ" ? "Đúng" : "Sai"}. Đáp án đúng: ${correctText}.`;
    } else {
      tfEmpty++;
      card.classList.add("wrong-card");
      feedback.className = "feedback show empty";
      feedback.textContent = `Chưa chọn. Đáp án đúng: ${correctText}.`;
    }
  });

  const correct = mcCorrect + tfCorrect;
  const wrong = mcWrong + tfWrong;
  const unanswered = mcEmpty + tfEmpty;
  // Mỗi phần chiếm 5 điểm; điểm được tính theo tỉ lệ đúng trong từng phần.
  const partOneScore = (mcCorrect / 15) * 5;
  const partTwoScore = (tfCorrect / 11) * 5;
  const totalScore = partOneScore + partTwoScore;

  document.getElementById("scoreCircle").textContent = `${formatScore(totalScore)}/10`;
  document.getElementById("correctCount").textContent = correct;
  document.getElementById("wrongCount").textContent = wrong;
  document.getElementById("emptyCount").textContent = unanswered;
  document.getElementById("resultTitle").textContent = correct === 26 ? "Hoàn thành xuất sắc!" : "Đã có kết quả bài làm";
  document.getElementById("resultSubtitle").textContent = `Bạn trả lời đúng ${correct}/26 ý. Điểm tổng được tính theo thang 10.`;
  document.getElementById("resultBreakdown").innerHTML = `
    <strong>Điểm từng phần</strong><br>
    Phần I – Trắc nghiệm: ${mcCorrect}/15 câu đúng · ${formatScore(partOneScore)}/5 điểm<br>
    Phần II – Đúng/Sai: ${tfCorrect}/11 ý đúng · ${formatScore(partTwoScore)}/5 điểm<br>
    <strong>Tổng điểm: ${formatScore(totalScore)}/10</strong>
  `;

  resultPanel.classList.add("show");
  submitButton.disabled = true;
  submitButton.textContent = "Đã nộp bài";
  submitted = true;
  resultPanel.focus();
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

quizForm.addEventListener("submit", submitQuiz);
resetButton.addEventListener("click", () => {
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderQuiz();
