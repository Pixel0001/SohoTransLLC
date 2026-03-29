const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    let message = '';

    switch (type) {
      case 'Contact':
        message = `📩 *CONTACT*\n\n👤 *Name:* ${data.name}\n📧 *Email:* ${data.email}\n📞 *Phone:* ${data.phone || 'N/A'}\n🏢 *Company:* ${data.company || 'N/A'}\n📋 *Subject:* ${data.subject}\n\n💬 *Message:*\n${data.message}`;
        break;

      case 'Drivers':
        message = `🚛 *DRIVER APPLICATION*\n\n👤 *Name:* ${data.name}\n📞 *Phone:* ${data.phone}\n📧 *Email:* ${data.email}\n📅 *Experience:* ${data.experience || 'N/A'}`;
        break;

      case 'Buy':
        message = `🛒 *BUY ORDER*\n\n📦 *Equipment:* ${data.equipment}\n� *Package:* ${data.package}\n💵 *Price:* ${data.price}\n🏢 *Company:* ${data.company}\n📞 *Phone:* ${data.phone}\n📍 *Address:* ${data.address}`;
        if (data.extras && data.extras !== 'None') {
          message += `\n\n🔧 *Extras:* ${data.extras}\n💰 *Extras Total:* ${data.extrasTotal}`;
        }
        break;

      case 'Rent':
        message = `📅 *RENT REQUEST*\n\n📦 *Equipment:* ${data.equipment}\n📋 *Package:* ${data.package}\n💵 *Price:* ${data.price}\n🏢 *Company:* ${data.company}\n📞 *Phone:* ${data.phone}\n📍 *Address:* ${data.address}`;
        if (data.extras && data.extras !== 'None') {
          message += `\n\n🔧 *Extras:* ${data.extras}\n💰 *Extras Total:* ${data.extrasTotal}`;
        }
        break;

      case 'Financing':
        message = `💰 *FINANCING REQUEST*\n\n🏢 *Business:* ${data.business}\n📧 *Email:* ${data.email}\n📞 *Phone:* ${data.phone}\n📦 *Equipment:* ${data.equipment || 'N/A'}`;
        break;

      default:
        message = `📝 *NEW MESSAGE (${type})*\n\n${JSON.stringify(data, null, 2)}`;
    }

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await res.json();

    if (!result.ok) {
      return Response.json({ success: false, error: result.description }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
