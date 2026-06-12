class Node {
  url: string;
  next: Node | null;
  prev: Node | null;

  constructor(url: string) {
    this.url = url;
    this.next = null;
    this.prev = null;
  }
}

class BrowserHistory {
  current: Node;

  constructor(url: string) {
    this.current = new Node(url);
  }

  visit(url: string): void {
    const node = new Node(url);
    this.current.next = null;
    node.prev = this.current;
    this.current.next = node;
    this.current = node;
  }

  forward(): string {
    if (this.current.next) {
      this.current = this.current.next;
    }
    return this.current.url;
  }

  back(): string {
    if (this.current.prev) {
      this.current = this.current.prev;
    }
    return this.current.url;
  }

  current_page(): string {
    return this.current.url;
  }
}

export const hist = new BrowserHistory("https://supabase.com/");
