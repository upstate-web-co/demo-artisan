import type { APIContext } from 'astro'
import { SITE, PRODUCTS, MARKETS } from '../../lib/config'

const SYSTEM_PROMPT = `You are the AI assistant for ${SITE.name}, a handmade candle, soap, and home goods studio in ${SITE.location}.

PRODUCTS:
${PRODUCTS.map(p => `- ${p.name} (${p.category}) — ${p.price} — ${p.description}`).join('\n')}

MARKET SCHEDULE:
${MARKETS.map(m => `- ${m.name}: ${m.day}, ${m.time} (${m.season})`).join('\n')}

CUSTOM ORDERS: Wedding favors, corporate gifts, custom labels, event scenting. Fill out the form on the website for a quote. Min order: 10 units. Lead time: 2-4 weeks.

SHIPPING: Free over $50. US only. Ships within 3-5 business days.

ABOUT: Handmade in small batches by Sarah. 100% soy wax, cotton wicks, cold-processed soaps.

RULES:
- Be warm, helpful, and knowledgeable about the products
- Keep answers concise (2-3 sentences)
- For custom orders, direct to the form on the website
- Recommend specific products when possible
- Never make up products or prices not in the list`

export async function POST({ request, locals }: APIContext) {
  try {
    const { message } = await request.json()
    if (!message || typeof message !== 'string') {
      return Response.json({ reply: 'What can I help you with?' })
    }

    const env = (locals as Record<string, any>).runtime?.env
    const apiKey = env?.ANTHROPIC_API_KEY

    if (!apiKey) {
      const lower = message.toLowerCase()
      if (lower.includes('candle') || lower.includes('best seller') || lower.includes('recommend')) {
        return Response.json({ reply: `Our best seller is the Fireside Soy Candle ($28) — woodsmoke, amber, and vanilla with a 60-hour burn. For gifts, the Essentials Gift Box ($58) is perfect!` })
      }
      if (lower.includes('soap')) {
        return Response.json({ reply: `We have two soaps: Honey Oat ($12, great for sensitive skin) and Charcoal Detox ($14, deep-cleansing for face and body). Both cold-processed and handmade.` })
      }
      if (lower.includes('market') || lower.includes('where') || lower.includes('find')) {
        return Response.json({ reply: `You can find us at Riverside Artisan Market (Sat 8am-12pm, Apr-Oct) and Downtown Makers Fair (1st & 3rd Sat, year-round). We're also stocked at The Collective year-round!` })
      }
      if (lower.includes('custom') || lower.includes('wedding') || lower.includes('gift') || lower.includes('corporate') || lower.includes('wholesale')) {
        return Response.json({ reply: `We'd love to help! Fill out the custom order form on this page with your details (type, quantity, timeline) and we'll send a quote within 48 hours.` })
      }
      if (lower.includes('ship') || lower.includes('deliver')) {
        return Response.json({ reply: `We ship anywhere in the US! Free shipping on orders over $50. Orders go out within 3-5 business days.` })
      }
      return Response.json({ reply: `Hi! I can help with product recommendations, market schedule, custom orders, or shipping questions. What would you like to know?` })
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 256,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: message }],
      }),
    })

    const data = await response.json() as { content?: { text: string }[] }
    const reply = data.content?.[0]?.text || 'I couldn\'t process that — try asking about our products or markets!'

    return Response.json({ reply })
  } catch {
    return Response.json({ reply: 'Something went wrong. Email us at ' + SITE.email + '!' })
  }
}
