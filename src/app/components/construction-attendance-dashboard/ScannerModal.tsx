import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";;
import { ScanLine, UserCheck, UserX } from 'lucide-react';

interface ScannerModalProps {
  open: boolean;
  onClose: () => void;
  onScan: (workerId: string, type: 'entry' | 'exit') => void;
}

export function ScannerModal({ open, onClose, onScan }: ScannerModalProps) {
  const [workerId, setWorkerId] = useState('');
  const [scanType, setScanType] = useState<'entry' | 'exit'>('entry');
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    if (!workerId.trim()) return;
    
    setScanning(true);
    // Simulate scanning delay
    setTimeout(() => {
      onScan(workerId, scanType);
      setScanning(false);
      setWorkerId('');
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ScanLine className="w-5 h-5 text-orange-500" />
            Worker ID Scanner
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex gap-2">
            <Button
              variant={scanType === 'entry' ? 'default' : 'outline'}
              className={`flex-1 ${scanType === 'entry' ? 'bg-green-500 hover:bg-green-600' : ''}`}
              onClick={() => setScanType('entry')}
            >
              <UserCheck className="w-4 h-4 mr-2" />
              Entry
            </Button>
            <Button
              variant={scanType === 'exit' ? 'default' : 'outline'}
              className={`flex-1 ${scanType === 'exit' ? 'bg-red-500 hover:bg-red-600' : ''}`}
              onClick={() => setScanType('exit')}
            >
              <UserX className="w-4 h-4 mr-2" />
              Exit
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Worker ID</label>
            <Input
              placeholder="Scan or enter worker ID..."
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleScan()}
              className="text-center text-lg font-mono"
              autoFocus
            />
          </div>

          <div className="bg-slate-50 p-4 rounded-lg text-center">
            <ScanLine className={`w-16 h-16 mx-auto mb-2 text-slate-400 ${scanning ? 'animate-pulse' : ''}`} />
            <p className="text-sm text-slate-600">
              {scanning ? 'Scanning...' : 'Enter worker ID or scan card'}
            </p>
          </div>

          <Button 
            onClick={handleScan} 
            disabled={!workerId.trim() || scanning}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            {scanning ? 'Processing...' : `Record ${scanType === 'entry' ? 'Entry' : 'Exit'}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
