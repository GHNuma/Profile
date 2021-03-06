import React, {useState} from 'react';
import Career from "../components/jobComponents/Career";

function Experience (){
    let [jobs, setJobs] = useState([
        {
            id: 1,
            name: "Микро кредитная организация",
            position: "Помощник главного менеджера",
            duration: "01.06.2019-29.08.2019",
            description: "На данной работе в моей главной обязанностью была оценка клиентов перед выдачей кредита. " +
                "А точнее, проверка данных клиента написанных при заявке на кредит. Для этого собирал информацию о клиенте из множество государственных и " +
                "личных баз данных финансовых организаций. При корректности данных и соответствий требованиям, составлял досье и отправлял комитету" +
                "для принятия окончательного решения о согласий или отказе в выдаче кредита.",
            placeImg: "microcredit.png"
        },
        {
            id: 2,
            name: "Разные интернет платформы",
            position: "Фрилансер",
            duration: "01.12.2017-сейчас",
            description: "Работал на русскоязычных и иностранных фриланс платформах. Выполнял разные задачи в области программирования." +
                " Входили не только задачи по веб разработке, также были заказы по анализу данных, дизайну, созданию игр и др. Заказы приходили не только" +
                " из платформ. Клиенты чьи заказы я успешно выполнял отправляли ко мне других, от чего со временем количество заказов росло. Обращались также студенты и учителя" +
                " из ВУЗ-ов которые просили обучить, подготовить к экзамену, сделать или решить проблемы с имеющимися проектами. В общем плане, было множество разных и необычных заказов" +
                " в разных областях IT.",
            placeImg: "freelance.png"
        },
        {
            id: 3,
            name: "Forte Bank",
            position: "Стажер-менеджер отдела направления взыскания проблемных взаймов",
            duration: "28.05.2021-05.07.2021",
            description: "Работа с документами и с клиентами. Работа с проблемными займами включала в себя изучение досье и уведомление заемщиков" +
                " которые долгое время не оплачивали долги перед банком. Также обновление информаций в базе данных, консультация с заемщиками, решение ситуаций с ними." +
                " в случае отказов оплаты кредита, последующие действия как оценка залогового имущества, его продажа и др. Имело место активное участие в событиях банка, работа с его другими отделами.",
            placeImg: "forteBank.png"
        }

    ]);

    return (

            <div style={{background:"rgba(0,0,0,0.9)",minHeight:"60vh",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                {jobs.map(job => {
                   return <Career key={job.id} {...job} />

                })}

            </div>

        );
    }


export default Experience;