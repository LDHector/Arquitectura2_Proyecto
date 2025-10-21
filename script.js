// Funciones de navegación
function scrollToSection(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
}

// Funciones para tarjetas interactivas
function toggleCard(card) {
  card.classList.toggle('active');
}

// Funciones del simulador de pipeline
let pipelineInterval;
let pipelineSpeed = 5;

function startPipeline() {
  const stages = document.querySelectorAll('.pipeline-stage');
  let currentStage = 0;
  
  clearInterval(pipelineInterval);
  pipelineInterval = setInterval(() => {
    stages.forEach(stage => stage.classList.remove('active'));
    
    if (currentStage < stages.length) {
      stages[currentStage].classList.add('active');
      currentStage++;
    } else {
      currentStage = 0;
    }
  }, 1000 / pipelineSpeed);
}

function pausePipeline() {
  clearInterval(pipelineInterval);
}

function resetPipeline() {
  clearInterval(pipelineInterval);
  const stages = document.querySelectorAll('.pipeline-stage');
  stages.forEach(stage => stage.classList.remove('active'));
}

function changePipelineSpeed(speed) {
  pipelineSpeed = speed;
  if (pipelineInterval) {
    pausePipeline();
    startPipeline();
  }
}

// Funciones de pestañas
function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll('.tab-content');
  tabcontent.forEach(tab => {
    tab.classList.remove('active');
  });
  
  const tabbuttons = document.querySelectorAll('.tab-button');
  tabbuttons.forEach(button => {
    button.classList.remove('active');
  });
  
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

function openSimTab(tabName) {
  const tabcontent = document.querySelectorAll('.sim-tab-content');
  tabcontent.forEach(tab => {
    tab.classList.remove('active');
  });
  
  const tabbuttons = document.querySelectorAll('.sim-tab');
  tabbuttons.forEach(button => {
    button.classList.remove('active');
  });
  
  document.getElementById(tabName).classList.add('active');
  event.target.classList.add('active');
}

// Funciones del simulador
function showComponentInfo(info) {
  document.getElementById('component-info').textContent = info;
}

function showMemoryInfo(info) {
  document.getElementById('component-info').textContent = info;
}

function executePipeline() {
  const instructions = document.querySelectorAll('.instruction');
  instructions.forEach((instruction, index) => {
    setTimeout(() => {
      instruction.style.background = 'rgba(0, 255, 240, 0.2)';
      instruction.style.boxShadow = '0 0 10px var(--neon-cyan)';
    }, index * 1000);
    
    setTimeout(() => {
      instruction.style.background = '';
      instruction.style.boxShadow = '';
    }, (index + 1) * 1000);
  });
}

// Evaluación de conocimientos
function checkAnswer() {
  const selected = document.querySelector('input[name="q1"]:checked');
  const result = document.getElementById('quiz-result');
  
  if (!selected) {
    result.textContent = 'Por favor selecciona una respuesta';
    result.style.background = 'rgba(255, 0, 0, 0.2)';
    result.style.borderLeft = '3px solid #ff0000';
    result.style.display = 'block';
    return;
  }
  
  if (selected.value === 'ALU') {
    result.textContent = '¡Correcto! La ALU (Unidad Aritmético-Lógica) es la que ejecuta operaciones aritméticas.';
    result.style.background = 'rgba(0, 255, 0, 0.2)';
    result.style.borderLeft = '3px solid #00ff00';
  } else {
    result.textContent = 'Incorrecto. La respuesta correcta es ALU (Unidad Aritmético-Lógica).';
    result.style.background = 'rgba(255, 0, 0, 0.2)';
    result.style.borderLeft = '3px solid #ff0000';
  }
  result.style.display = 'block';
}

// Simulación de descarga de recursos
function downloadResource(type) {
  alert(`Descargando recurso: ${type}`);
  // En una implementación real, aquí iría la lógica para descargar el archivo
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar todas las pestañas
  const firstTabs = document.querySelectorAll('.tab-content');
  firstTabs.forEach(tab => {
    if (tab.parentElement.querySelector('.tab-button.active')) {
      tab.classList.add('active');
    }
  });
  
  // Inicializar progreso del curso
  updateProgress();
});

function updateProgress() {
  // Simular actualización del progreso
  const progressRing = document.querySelector('.progress-ring');
  const progressText = document.querySelector('.progress-text');
  
  // En una implementación real, esto vendría de una base de datos o API
  const progress = 50; // 50% completado
  
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (progress / 100) * circumference;
  
  progressRing.style.strokeDashoffset = offset;
  progressText.textContent = `${progress}%`;
}

// Efectos visuales adicionales
document.querySelectorAll('.cpu-component').forEach(component => {
  component.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 0 15px var(--neon-purple)';
  });
  
  component.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });
});

// Simulación de instrucciones en tiempo real
function simulateInstructionExecution() {
  const instructions = [
    'MOV R1, 5',
    'ADD R2, R1',
    'SUB R3, R2',
    'JMP LOOP'
  ];
  
  let currentInstruction = 0;
  setInterval(() => {
    console.log(`Ejecutando: ${instructions[currentInstruction]}`);
    currentInstruction = (currentInstruction + 1) % instructions.length;
  }, 2000);
}

// Iniciar simulación (opcional)
// simulateInstructionExecution();