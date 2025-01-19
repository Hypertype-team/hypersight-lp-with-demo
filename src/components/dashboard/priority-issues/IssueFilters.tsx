interface IssueFiltersProps {
  className?: string;
}

const IssueFilters = ({ className = "" }: IssueFiltersProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <select className="rounded-lg border px-4 py-2 text-sm">
        <option>Urgency</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select className="rounded-lg border px-4 py-2 text-sm">
        <option>All Teams</option>
        <option>Hardware</option>
        <option>Operations</option>
        <option>Installation</option>
      </select>
      <select className="rounded-lg border px-4 py-2 text-sm">
        <option>All Issues</option>
        <option>Battery</option>
        <option>Heat Pump</option>
        <option>Solar Panel</option>
      </select>
    </div>
  );
};

export default IssueFilters;