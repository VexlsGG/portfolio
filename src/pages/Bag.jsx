import './Bag.css';

function Bag() {
  const items = [
    {
      id: 1,
      name: "MacBook Pro 16\"",
      description: "My main development machine with M2 Pro chip, perfect for running multiple IDEs and containers.",
      category: "Tech"
    },
    {
      id: 2,
      name: "Sony WH-1000XM5",
      description: "Noise-cancelling headphones for focused coding sessions and music during breaks.",
      category: "Audio"
    },
    {
      id: 3,
      name: "iPad Pro 12.9\"",
      description: "For reading documentation, sketching UI designs, and taking notes during meetings.",
      category: "Tech"
    },
    {
      id: 4,
      name: "Moleskine Notebook",
      description: "Classic notebook for quick sketches, brainstorming ideas, and jotting down thoughts.",
      category: "Stationery"
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      description: "Custom built with Cherry MX Brown switches for the perfect typing experience.",
      category: "Tech"
    },
    {
      id: 6,
      name: "Wireless Mouse",
      description: "Logitech MX Master 3S for precise navigation and productivity features.",
      category: "Tech"
    },
    {
      id: 7,
      name: "USB-C Hub",
      description: "Multi-port hub with HDMI, USB 3.0, and SD card reader for maximum connectivity.",
      category: "Tech"
    },
    {
      id: 8,
      name: "Water Bottle",
      description: "Insulated stainless steel bottle to stay hydrated throughout the day.",
      category: "Lifestyle"
    },
    {
      id: 9,
      name: "Portable SSD",
      description: "1TB Samsung T7 for backups and transporting large project files.",
      category: "Storage"
    },
    {
      id: 10,
      name: "AirPods Pro",
      description: "Perfect for quick calls, podcasts during commute, and casual listening.",
      category: "Audio"
    },
    {
      id: 11,
      name: "Phone Stand",
      description: "Adjustable aluminum stand for keeping phone visible during deep work sessions.",
      category: "Accessory"
    },
    {
      id: 12,
      name: "Cable Organizer",
      description: "Keeps all my cables organized and tangle-free in my bag.",
      category: "Accessory"
    }
  ];

  const categoryEmoji = {
    'Tech': '💻',
    'Audio': '🎧',
    'Stationery': '📓',
    'Lifestyle': '💧',
    'Storage': '💾',
    'Accessory': '🔌'
  };

  return (
    <div className="bag">
      <div className="bag-container">
        <h1 className="page-title">What's in My Bag</h1>
        <p className="page-subtitle">The essential tools and items I carry every day</p>
        
        <div className="items-grid">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="item-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="item-icon">
                {categoryEmoji[item.category] || '📦'}
              </div>
              <div className="item-category">{item.category}</div>
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bag;
