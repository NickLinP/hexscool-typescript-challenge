// 定義 Patient 病患介面
interface Patient {
    name: string;
    age: number;
    gender: string;
    // 病歷號碼
    medicalRecordNumber: string;
}

// 定義 Appointment 預約介面
interface Appointment {
    date: string;
    time: string;
    doctorName: string;
    // 病例號碼
    patientMedicalRecordNumber: string;
}

// 病患資料陣列
let patients: Patient[] = [];

// 預約資料陣列
let appointments: Appointment[] = [];

// 實作函式 addPatient
function addPatient(patient: Patient): void {
    patients.push(patient);
}

// 實作函式 scheduleAppointment
function scheduleAppointment(appointment: Appointment): void {
    // 確保病患存在
    // 如果有病患存在 patientExists 會是 true
    const patientExists = patients.some(
        (patient) => patient.medicalRecordNumber === appointment.patientMedicalRecordNumber
    );

    if (!patientExists) {
        throw new Error("病患不存在，要確欸");
    }

    // TODO: 增加一筆預約到預約列表
    appointments.push(appointment);
}

// TODO: 函式 cancelAppointment
function cancelAppointment(appointment: Appointment) {
    appointments.forEach((element: Appointment, index: number) => {
        if (appointment.date !== element.date) return
        if (appointment.time !== element.time) return
        if (appointment.doctorName !== element.doctorName) return
        if (appointment.patientMedicalRecordNumber !== element.patientMedicalRecordNumber) return
        appointments.splice(index, 1)
    });
}

// TODO: 實作函式 listAppointments
function listAppointments(patient: Patient): Appointment[]|[] {
    let list = appointments.filter((ele: Appointment) => {
        return ele.patientMedicalRecordNumber === patient.medicalRecordNumber;
    }) ?? [];
    return list;
}

// 增加病患
addPatient({ name: "John Doe", age: 30, gender: "Male", medicalRecordNumber: "12345" });
addPatient({ name: "John", age: 21, gender: "Male", medicalRecordNumber: "11111" });
addPatient({ name: "Doe", age: 60, gender: "Male", medicalRecordNumber: "22222" });

// 安排預約
scheduleAppointment({ date: "2024-01-15", time: "10:00", doctorName: "Dr. Smith", patientMedicalRecordNumber: "12345" });
scheduleAppointment({ date: "2024-01-19", time: "12:00", doctorName: "Dr. Smith", patientMedicalRecordNumber: "12345" });
scheduleAppointment({ date: "2024-02-15", time: "16:00", doctorName: "Dr. Smith", patientMedicalRecordNumber: "12345" });

// 列出預約資訊
console.log(listAppointments({ name: "John Doe", age: 30, gender: "Male", medicalRecordNumber: "12345" }))

// 刪除某一筆預約
cancelAppointment({ date: "2024-01-19", time: "12:00", doctorName: "Dr. Smith", patientMedicalRecordNumber: "12345" })
console.log(listAppointments({ name: "John Doe", age: 30, gender: "Male", medicalRecordNumber: "12345" }))