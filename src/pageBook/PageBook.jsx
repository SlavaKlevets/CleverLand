import React from 'react';
import style from './PageBook.module.css';
import image from "../images/image.png";
import star from "../images/Star 1.png";
import star2 from "../images/Star 2 .png";
import avaComment from "../images/AvaComment.png"

const element = [
    {
        img: image,
        grade: 4,
        name: "Грокаем алгоритмы. Иллюстрированное пособие" +
            " для программистов " +
            "и любопытствующих",
        author: "Адитья Бхаргава, 2019",
        boock: "Алгоритмы — это всего лишь пошаговые алгоритмы решения задач," +
            "и большинство таких задач уже были кем-то решены, протестированы" +
            "и проверены. Можно, конечно, погрузится в глубокую философию" +
            "гениального Кнута,изучить многостраничные фолианты" +
            "с доказательствами и обоснованиями,но хотите ли вы тратить на это свое" +
            "время?",
        boock2: "Откройте великолепно иллюстрированную книгу и вы сразу поймете," +
            "что алгоритмы— это просто. А грокать алгоритмы — это веселое и увлекательное занятие.",
        booking: true
    }
];

const srade = [];
for (let i = 0; i <= element[0].grade; i++) {
    srade.push(i);
}

const grade1 = srade.map(i => {
    if (i !== 0) {
        return <img className={style.star} src={star} alt=""/>
    } else if (i === 0) {
        {
            <span>еще нет оценок</span>
        }
    }
})

const PageBook = () => {
    return (
        <div className={style.wrapperPageBook}>
            <div className={style.way}> </div>
            <div className={style.imageBlock}>
                <div className={style.pictureBlock}>
                    <img className={style.mainPicture} src={element[0].img} alt=""/>
                </div>
                <div className={style.dataBook}>
                    <div className={style.bookAuthorName}>
                        <h3 className={style.pageName}>{element[0].name}</h3>
                        <h5 className={style.author}>{element[0].author}</h5>
                        <button className={style.but}>Забронировать</button>
                    </div>
                    <div className={style.wrapperObook}>
                        <h5 className={style.obook}>О книге</h5>
                        <p className={style.book}>{element[0].boock}</p>
                        <p className={style.book2}>{element[0].boock2}</p>
                    </div>
                </div>
            </div>
            <div className={style.commentsBlocks}>
                <div className={style.commentsBlocksWrapper}>
                    <h5 className={style.rating}>Рейтинг</h5>
                    <hr className={style.hrLine}/>
                    <span className={style.stars}>{grade1}<img className={style.star} src={star2} alt=""/>
                        <span className={style.numberRating}>4.3</span></span>
                </div>
                <div className={style.podrInformation}>
                    <div className={style.information}><h5>Подробная информация</h5></div>
                    <div className={style.table}>
                        <div className={style.colum1}>
                            <p>Издательство</p>
                            <p>Год издания</p>
                            <p>Страниц</p>
                            <p>Переплёт</p>
                            <p>Формат</p>
                        </div>
                        <div className={style.colum2}>
                            <p>Питер</p>
                            <p>2019</p>
                            <p>288</p>
                            <p>Мягкая обложка</p>
                            <p>70х100</p>
                        </div>
                        <div className={style.colum3}>
                            <p>Жанр</p>
                            <p>Вес</p>
                            <p>ISBN</p>
                            <p>Изготовитель</p>
                        </div>
                        <div className={style.colum4}>
                            <p>Компьютерная литература</p>
                            <p>370 г</p>
                            <p>978-5-4461-0923-4</p>
                            <p>ООО «Питер Мейл». РФ, 198 206, г.Санкт-Петербург, Петергофское ш, д.73, лит. А29</p>
                        </div>
                    </div>
                    <div className={style.table2}>
                        <div className={style.colum21}>
                            <p>Издательство</p>
                            <p>Год издания</p>
                            <p>Страниц</p>
                            <p>Переплёт</p>
                            <p>Формат</p>
                            <p>Питер</p>
                            <p>2019</p>
                            <p>288</p>
                            <p>Мягкая обложка</p>
                            <p>70х100</p>
                        </div>
                        <div className={style.colum23}>
                            <p>Жанр</p>
                            <p>Вес</p>
                            <p>ISBN</p>
                            <p>Изготовитель</p>
                            <p>Компьютерная литература</p>
                            <p>370 г</p>
                            <p>978-5-4461-0923-4</p>
                            <p>ООО «Питер Мейл». РФ, 198 206, г.Санкт-Петербург, Петергофское ш, д.73, лит. А29</p>
                        </div>
                    </div>
                </div>
                <div className={style.comments}>
                    <div className={style.commentsWrap}>
                        <span className={style.otzuv}><h5 className={style.otzuvH5}>Отзывы 2</h5></span>
                        <hr className={style.hrLine2}/>
                        <div className={style.wrapComments}>
                            <div className={style.wrapComment}>
                                <img src={avaComment} alt=""/>
                                <span className={style.commentsName}>Иван Иванов</span>
                                <span className={style.commentsDate}>5 января 2019</span>
                            </div>
                            <span>{grade1}<img className={style.star} src={star2} alt=""/></span>
                            <p className={style.commentsComent}> </p>
                        </div>
                        <div className={style.wrapComments}>
                            <div className={style.wrapComment}>
                                <img src={avaComment} alt=""/>
                                <span className={style.commentsName}>Николай Качков</span>
                                <span className={style.commentsDate}>20 июня 2018</span>
                            </div>
                            <span>{grade1}<img className={style.star} src={star2} alt=""/></span>
                            <p className={style.commentsComent}>
                                Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный
                                проект
                                не оставляет шанса для анализа существующих паттернов поведения. Для современного мира
                                внедрение
                                современных методик предоставляет широкие возможности для позиций, занимаемых
                                участниками в
                                отношении
                                поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики
                                выводы будут в
                                равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций —
                                глубокий уровень
                                погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет
                                сомнений,
                                что акционеры
                                крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище,
                                хотя
                                само их
                                существование приносит несомненную пользу обществу.
                            </p>
                        </div>
                        <div className={style.wrapComments}>
                            <div className={style.wrapComment}>
                                <img src={avaComment} alt=""/>
                                <span className={style.commentsName}>Екатерина Беляева</span>
                                <span className={style.commentsDate}>18 февраля 2018</span>
                            </div>
                            <span>{grade1}<img className={style.star} src={star2} alt=""/></span>
                            <p className={style.commentsComent}></p>
                        </div>
                        <button className={style.but2}>оценить книгу</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageBook;