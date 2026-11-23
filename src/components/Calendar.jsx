import { useState, useMemo, useCallback, memo } from "react";
import { useSelector } from "react-redux";
import "./Calendar.css";

const EMPTY = [];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const toKey = (d) => d.toLocaleDateString("en-CA");

const Day = memo(function Day({ k, date, hasTasks, selected, onSelect }) {
  if (!date) return <div className="day empty" />;
  return (
    <button className={`day ${selected ? "sel" : ""}`} onClick={() => onSelect(k)}>
      {date}
      {hasTasks && <i className="dot" />}
    </button>
  );
});

export default function Calendar() {
  const tasks = useSelector((s) => s.tasks) || EMPTY;
  const [view, setView] = useState(new Date());
  const [selected, setSelected] = useState(toKey(new Date()));
  const y = view.getFullYear();
  const m = view.getMonth();

  const byDate = useMemo(() => {
    const map = {};
    tasks.forEach((t) => t.dueDate && (map[t.dueDate] ||= []).push(t));
    return map;
  }, [tasks]);

  const cells = useMemo(() => {
    const offset = new Date(y, m, 1).getDay();
    const total = new Date(y, m + 1, 0).getDate();
    const size = Math.ceil((offset + total) / 7) * 7;
    return Array.from({ length: size }, (_, i) => {
      const d = i - offset + 1;
      return d >= 1 && d <= total ? new Date(y, m, d) : null;
    });
  }, [y, m]);

  const move = useCallback(
    (n) => setView((d) => new Date(d.getFullYear(), d.getMonth() + n, 1)),
    []
  );
  const select = useCallback((k) => setSelected(k), []);

  const dayTasks = byDate[selected] || EMPTY;
  const title = new Date(selected + "T00:00:00").toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });

  return (
    <div className="cal-page">
      <h1>Calendar</h1>

      <section className="cal">
        <header>
          <button onClick={() => move(-1)}>‹ Prev</button>
          <h2>{view.toLocaleString("en-US", { month: "long", year: "numeric" })}</h2>
          <button onClick={() => move(1)}>Next ›</button>
        </header>

        <div className="grid">
          {DAYS.map((d) => <b key={d}>{d}</b>)}
          {cells.map((d, i) => {
            const k = d ? toKey(d) : "";
            return (
              <Day
                key={d ? k : `e${i}`}
                k={k}
                date={d ? d.getDate() : 0}
                hasTasks={!!byDate[k]}
                selected={k === selected}
                onSelect={select}
              />
            );
          })}
        </div>
      </section>

      <section className="details">
        <h3>Tasks for {title}</h3>
        {dayTasks.length === 0 && <p className="none">No tasks due this day.</p>}
        {dayTasks.map((t) => (
          <div className="row" key={t.id}>
            <div>
              <strong>{t.title}</strong>
              {t.description && <p>{t.description}</p>}
            </div>
            <span className={`pill ${String(t.status).toLowerCase()}`}>{t.status}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

